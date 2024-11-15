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
                RETURNS TABLE(id integer, name text, classification text, "totalItems" integer, "totalValue" double precision, "itensFaltantes" text[]) 
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

            CREATE OR REPLACE PROCEDURE execute_generated_queries()
            LANGUAGE plpgsql
            AS $$
            DECLARE
                query_text TEXT;
                query_cursor CURSOR FOR
                    SELECT 'SELECT SETVAL(' ||
                        quote_literal(quote_ident(PGT.schemaname) || '.' || quote_ident(S.relname)) ||
                        ', COALESCE(MAX(' || quote_ident(C.attname) || '), 1) ) FROM ' ||
                        quote_ident(PGT.schemaname) || '.' || quote_ident(T.relname) || ';'
                    FROM pg_class AS S,
                        pg_depend AS D,
                        pg_class AS T,
                        pg_attribute AS C,
                        pg_tables AS PGT
                    WHERE S.relkind = 'S'
                    AND S.oid = D.objid
                    AND D.refobjid = T.oid
                    AND D.refobjid = C.attrelid
                    AND D.refobjsubid = C.attnum
                    AND T.relname = PGT.tablename
                    ORDER BY S.relname;
            BEGIN
                -- Abrir o cursor
                OPEN query_cursor;

                -- Loop pelos resultados do cursor
                LOOP
                    FETCH query_cursor INTO query_text;
                    EXIT WHEN NOT FOUND;

                    -- Executar cada comando gerado
                    RAISE NOTICE 'Executing: %', query_text; -- Para depuração (opcional)
                    EXECUTE query_text;
                END LOOP;

                -- Fechar o cursor
                CLOSE query_cursor;
            END;
            $$;


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
