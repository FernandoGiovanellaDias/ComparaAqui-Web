const { where, QueryTypes, Op } = require("sequelize");
const { Mercado, Usuario, sequelize } = require("../../models");
const moment = require("moment");


module.exports = {
  async criarMercado(req, res) {
    let entity = req.body.mercado;
    let val = validarMercado(entity);
    if (val.error) {
      return res.json(val);
    }

    if (
      entity.id !== undefined &&
      entity.id !== null &&
      entity.id !== ""
    ) {
      if (entity.id !== 0) {
        return res.json({
          error: true,
          message: "O mercado que está sendo criado já existe",
        });
      }
      entity.id = null;
    }
    try {
      const mercado = await Mercado.create(entity);
      return res.json(mercado);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar mercado" });
    }
  },

  async editarMercado(req, res) {
    let entity = req.body.mercado;
    let val = validarMercado(entity);
    if (val.error) {
      return res.json(val);
    }
    try {
      const editMercado = await Mercado.findOne({
        where: { id: req.params.id },
      });

      if (!editMercado) {
        return res.json({ error: true, message: "Mercado não encontrado" });
      }

      Object.keys(entity).forEach(key => {
        if (key != "id" && editMercado.dataValues.hasOwnProperty(key)) {
          editMercado[key] = entity[key];
        }
      });

      const mercado = await editMercado.save();

      return res.json(mercado);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar mercado" });
    }
  },

  async deletarMercado(req, res) {
    try {
      await Mercado.destroy({ where: { id: req.params.id } });
      return res.send(200);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar mercado" });
    }
  },

  async recuperarMercadosAtivos(req, res) {
    let mercados = [];
    mercados = await Mercado.findAll({
      where: { status: true },
    });

    return res.json(mercados);
  },

  async recuperarMercados(req, res) {
    let entity = req.body;
    let where = {};

    if (entity.filtro !== undefined && entity.filtro !== null && entity.filtro.length > 0) {
      where = { name: { [Op.iLike]: `%${entity.filtro}%` } };
    }

    let mercados = [];
    mercados = await Mercado.findAll({ where: where, order: [["name", "asc"]]});
    return res.json(mercados);
  },

  async recuperarMercado(req, res) {
    try {
      const mercados = await Mercado.findByPk(req.params.id);
      if (!mercados) {
        return res.json({ error: true, message: "Estabelecimento não encontrado", erros: [] });
      }

      return res.json({ error: false, message: "", erros: [], estabelecimento: mercados });
    } catch (error) {
      return res.json({ error: true, message: "Falha ao recuperar o estabelecimento", erros: [] });
    }
  },


  async recuperarMercadPorProdutos(req, res) {
    let entity = req.body;

    if (entity.id_produtos == undefined ||
      entity.id_produtos == null ||
      entity.id_produtos.length == 0) {
      return res.json({ error: true, message: "Não há itens a serem buscados", erros: [] });
    }

    const filtro = entity.id_produtos.join(", ");

    const mercados = await sequelize.query(`
      select * FROM buscar_mercados_com_produtos(array[${filtro}]::integer[]);
      `, {
      type: QueryTypes.SELECT
    })
    return res.json({ lista: mercados });
  },
};

function validarMercado(mercado) {
  const erros = {};

  if (mercado === null || mercado === undefined) {
    return { error: true, message: "Não foi possível identificar os dados do mercado", erros: erros };
  }
  if (
    mercado.name !== undefined &&
    mercado.name !== null &&
    mercado.name.length > 0
  ) {
    if (mercado.name.length <= 3) {
      erros["name"] = "O campo nome deve ter ao menos 4 caracteres";
    }
  } else {
    erros["name"] = "O campo nome é obrigatório";
  }



  if (Object.keys(erros).length === 0) {
    return { error: false, message: "Mercado válido", erros: [] };
  } else {
    return { error: true, message: "Validação falhou", erros: erros };
  }
}
