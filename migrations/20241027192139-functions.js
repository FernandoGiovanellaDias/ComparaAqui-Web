'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(`
            DROP FUNCTION IF EXISTS buscar_mercados_com_produtos;
            CREATE OR REPLACE FUNCTION public.buscar_mercados_com_produtos(IN idsprod integer[])
            RETURNS TABLE(id_mercado integer, name text, ordem integer, totalitems integer, totalvalue double precision, produtos_ausentes text[])
            LANGUAGE 'plpgsql'
            AS $BODY$
            DECLARE
                nomesProdutos text[];
                tamanho_idsprod integer; 
                retorno record;
            BEGIN
                -- Chama a função para obter os padrões de nome dos produtos
                nomesProdutos := obter_padroes_nome(idsprod);
                tamanho_idsprod := array_length(nomesProdutos, 1);

                -- Popula retornos com mercados que possuem produtos correspondentes aos padrões ILIKE
                FOR retorno IN
                    SELECT 
                        p.id_mercado,
                        m.name::text AS name,
                        calcular_classificacao(COUNT(p.id)::integer, tamanho_idsprod) AS classification,
                        COUNT(p.id) AS totalitems,
                        COALESCE(SUM(p.price), 0) AS totalvalue,
                  ROW_NUMBER() OVER (ORDER BY COUNT(p.id) DESC) AS row_num
                    FROM produto p
                    JOIN mercado m ON m.id = p.id_mercado
                    WHERE p.name ILIKE ANY(nomesProdutos)
                    GROUP BY p.id_mercado, m.name
                    ORDER BY totalitems DESC
                LOOP
                    -- Define o array produtos_ausentes
                    RETURN QUERY
                    SELECT 
                        retorno.id_mercado,
                        retorno.name::text,
                        retorno.row_num::integer AS ordem,
                        retorno.totalitems::integer,
                        retorno.totalvalue,
                        CASE 
                            WHEN retorno.totalitems = tamanho_idsprod THEN NULL
                            ELSE ARRAY(
                                SELECT DISTINCT pr.name::text 
                                FROM produto pr
                                WHERE pr.id = ANY(idsprod) 
                                AND pr.name ILIKE ANY(nomesProdutos)
                                AND pr.id NOT IN (
                                    SELECT p.id 
                                    FROM produto p 
                                    WHERE p.id_mercado = retorno.id_mercado 
                                    AND p.name ILIKE ANY(nomesProdutos)
                                )
                            )
                        END AS produtos_ausentes;
                END LOOP;
            END;
            $BODY$;


      `);
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(`
            drop function if exists buscar_mercados_com_produtos;
      `);
    }
};
