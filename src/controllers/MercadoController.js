const { where } = require("sequelize");
const { Mercado, Usuario } = require("../../models");
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

      Object.keys(entity).forEach(key => {
        if (key != "id" && editMercado.hasOwnProperty(key)) {
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
    let mercados = [];
    mercados = await Mercado.findAll();
    return res.json(mercados);
  },

  async recuperarMercado(req, res) {
    const mercados = await Mercado.findByPk(req.params.id);
    return res.json(mercados);
  },
};

function validarMercado(mercado) {
  const erros = {};

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
