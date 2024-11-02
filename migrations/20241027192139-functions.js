'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(`
            DROP FUNCTION IF EXISTS public.array_diff(text[], text[]);

            CREATE OR REPLACE FUNCTION public.array_diff(
                arr1 text[],
                arr2 text[])
                RETURNS text[]
                LANGUAGE 'plpgsql'
                COST 100
                VOLATILE PARALLEL UNSAFE
            AS $BODY$
            DECLARE
                result TEXT[];
            BEGIN
                result := ARRAY(
                    SELECT unnest(arr1)
                    EXCEPT
                    SELECT unnest(arr2)
                );
                RETURN result;
            END;
            $BODY$;

            ALTER FUNCTION public.array_diff(text[], text[])
                OWNER TO postgres;

            DROP FUNCTION IF EXISTS public.calcular_classificacao(integer, integer);

            CREATE OR REPLACE FUNCTION public.calcular_classificacao(
                totalitems integer,
                tamanho_idsprod integer)
                RETURNS text
                LANGUAGE 'plpgsql'
                COST 100
                VOLATILE PARALLEL UNSAFE
            AS $BODY$
            BEGIN
                IF totalitems < 4 THEN
                    RETURN CASE 
                            WHEN totalitems = tamanho_idsprod THEN 'RECOMENDADO'
                            WHEN (tamanho_idsprod - totalitems) < 2 THEN 'PARCIAL'
                            ELSE 'GERAL'
                        END;
                ELSE
                    RETURN CASE 
                            WHEN totalitems = tamanho_idsprod THEN 'RECOMENDADO'
                            WHEN (tamanho_idsprod - totalitems) < 4 THEN 'PARCIAL'
                            ELSE 'GERAL'
                        END;
                END IF;
            END;
            $BODY$;

            ALTER FUNCTION public.calcular_classificacao(integer, integer)
                OWNER TO postgres;

            DROP FUNCTION IF EXISTS public.obter_padroes_nome(integer[]);

            CREATE OR REPLACE FUNCTION public.obter_padroes_nome(
                idsprod integer[])
                RETURNS text[]
                LANGUAGE 'plpgsql'
                COST 100
                VOLATILE PARALLEL UNSAFE
            AS $BODY$
            DECLARE
                nomesProdutos text[];
            BEGIN
                nomesProdutos := (SELECT array_agg(distinct '%' || p.name || '%') FROM produto p WHERE p.id = ANY(idsprod));
                RETURN nomesProdutos;
            END;
            $BODY$;

            ALTER FUNCTION public.obter_padroes_nome(integer[])
                OWNER TO postgres;

            DROP FUNCTION IF EXISTS public.obter_padroes_nome_sem_busca(integer[]);

            CREATE OR REPLACE FUNCTION public.obter_padroes_nome_sem_busca(
                idsprod integer[])
                RETURNS text[]
                LANGUAGE 'plpgsql'
                COST 100
                VOLATILE PARALLEL UNSAFE
            AS $BODY$
            DECLARE
                nomesProdutos text[];
            BEGIN
                nomesProdutos := (SELECT array_agg(distinct p.name ) FROM produto p WHERE p.id = ANY(idsprod));
                RETURN nomesProdutos;
            END;
            $BODY$;

            ALTER FUNCTION public.obter_padroes_nome_sem_busca(integer[])
                OWNER TO postgres;

            DROP FUNCTION IF EXISTS public.buscar_mercados_com_produtos(integer[]);

            CREATE OR REPLACE FUNCTION public.buscar_mercados_com_produtos(
                idsprod integer[])
                RETURNS TABLE(id_mercado integer, name text, classification text, totalitems integer, totalvalue double precision, itensfaltantes text[]) 
                LANGUAGE 'plpgsql'
                COST 100
                VOLATILE PARALLEL UNSAFE
                ROWS 1000

            AS $BODY$
            DECLARE
                nomesProdutos text[];
                nomesProdutosSemBusca text[];
                tamanho_idsprod integer; 
                retorno record;
            BEGIN
                nomesProdutos := obter_padroes_nome(idsprod);
                nomesProdutosSemBusca := obter_padroes_nome_sem_busca(idsprod);
                tamanho_idsprod := array_length(nomesProdutos, 1);

                FOR retorno IN
                    SELECT 
                        p.id_mercado,
                        m.name::text AS name,
                        calcular_classificacao(COUNT(p.id)::integer, tamanho_idsprod) AS classification,
                        COUNT(p.id) AS totalitems,
                        ROUND(COALESCE(SUM(p.price), 0)::numeric, 2)::double precision AS totalvalue,
                        array_agg(p.name)::text[] as nomesencontrados,
                        ROW_NUMBER() OVER (ORDER BY COUNT(p.id) DESC, sum(p.price)) AS row_num
                    FROM produto p
                    JOIN mercado m ON m.id = p.id_mercado
                    WHERE p.name ILIKE ANY(nomesProdutos)
                    GROUP BY p.id_mercado, m.name
                    ORDER BY row_num 
                LOOP
                    RETURN QUERY
                    SELECT 
                        retorno.id_mercado,
                        retorno.name::text,
                        retorno.classification,
                        retorno.totalitems::integer,
                        retorno.totalvalue,
                        array_diff(nomesProdutosSemBusca , retorno.nomesencontrados) AS produtos_ausentes;
                END LOOP;
            END;
            $BODY$;

            ALTER FUNCTION public.buscar_mercados_com_produtos(integer[])
                OWNER TO postgres;

      `);
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(`
            DROP FUNCTION IF EXISTS public.array_diff(text[], text[]);
            DROP FUNCTION IF EXISTS public.calcular_classificacao(integer, integer);
            DROP FUNCTION IF EXISTS public.obter_padroes_nome(integer[]);
            DROP FUNCTION IF EXISTS public.obter_padroes_nome_sem_busca(integer[]);
            DROP FUNCTION IF EXISTS public.buscar_mercados_com_produtos(integer[]);
      `);
    }
};
