const { where } = require("sequelize");
const { Categoria, Usuario } = require("../../models");
const moment = require("moment");


module.exports = {
  async criarCategoria(req, res) {
    let entity = req.body.categoria;
    let val = validarCategoria(entity);
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
          message: "A categoria que está sendo criada já existe",
        });
      }
      entity.id = null;
    }
    try {
      const categoria = await Categoria.create(entity);
      return res.json(categoria);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar categoria" });
    }
  },

  async editarCategoria(req, res) {
    let entity = req.body.categoria;
    let val = validarCategoria(entity);
    if (val.error) {
      return res.json(val);
    }
    try {
      const editCategoria = await Categoria.findOne({
        where: { id: req.params.id },
      });

      Object.keys(entity).forEach(key => {
        if (key != "id" && editCategoria.hasOwnProperty(key)) {
          editCategoria[key] = entity[key];
        }
      });

      const categoria = await editCategoria.save();

      return res.json(categoria);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar categoria" });
    }
  },

  async deletarCategoria(req, res) {
    try {
      await Categoria.destroy({ where: { id: req.params.id } });
      return res.send(200);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar categoria" });
    }
  },

  async recuperarCategorias(req, res) {
    let categorias = [];
    categorias = await Categoria.findAll({
      where: { status: true },
    });

    return res.json({lista : categorias});
  },

  async recuperarCategoria(req, res) {
    const categorias = await Categoria.findByPk(req.params.id);
    return res.json(categorias);
  },
};

function validarCategoria(categoria) {
  const erros = {};

  if (
    categoria.title !== undefined &&
    categoria.title !== null &&
    categoria.title.length > 0
  ) {
    if (categoria.title.length <= 3) {
      erros["title"] = "O campo nome deve ter ao menos 4 caracteres";
    }
  } else {
    erros["title"] = "O campo nome é obrigatório";
  }


  if (Object.keys(erros).length === 0) {
    return { error: false, message: "Categoria válida", erros: [] };
  } else {
    return { error: true, message: "Validação falhou", erros: erros };
  }
}
