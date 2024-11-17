const { where, Sequelize, Op } = require("sequelize");
const { Produto, Categoria, Mercado } = require("../../models");
const moment = require("moment");


module.exports = {
  async criarProduto(req, res) {
    let entity = req.body.produto;
    entity.price = parseDinheiro(entity.price ?? "");
    let val = validarProduto(entity);
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
          message: "A produto que está sendo criado já existe",
        });
      }
      entity.id = null;
    }
    try {
      const produto = await Produto.create(entity);
      return res.json(produto);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar produto" });
    }
  },

  async editarProduto(req, res) {
    let entity = req.body.produto;
    entity.price = parseDinheiro(entity.price ?? "");
    let val = validarProduto(entity);
    if (val.error) {
      return res.json(val);
    }
    try {
      const editProduto = await Produto.findOne({
        where: { id: req.params.id },
      });

      if (!editProduto) {
        return res.json({ error: true, message: "Produto não encontrado" });
      }

      Object.keys(entity).forEach(key => {
        if (key != "id" && editProduto.dataValues.hasOwnProperty(key)) {
          editProduto[key] = entity[key];
        }
      });

      const produto = await editProduto.save();

      return res.json(produto);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar produto" });
    }
  },

  async deletarProduto(req, res) {
    try {
      await Produto.destroy({ where: { id: req.params.id } });
      return res.send(200);
    } catch (excerpt) {
      console.error(excerpt);
      return res.json({ error: true, message: "Falha ao salvar produto" });
    }
  },

  async recuperarProdutosAtivos(req, res) {
    let produtos = [];
    produtos = await Produto.findAll({
      where: { status: true },
    });

    return res.json(produtos);
  },

  async recuperarProdutosPorCategoriaMercado(req, res) {
    let produtos = [];
    let where = { status: true };
    if (req.body.id_categoria) {
      where["id_categoria"] = req.body.id_categoria;
    }
    if (req.body.id_mercado) {
      where["id_mercado"] = req.body.id_mercado;
    }

    where["status"] = req.body.status ?? true;

    let whereProdutos = null;
    if (req.body.id_produtos) {
      whereProdutos = Sequelize.literal(`name ILIKE ANY (obter_padroes_nome(array[${req.body.id_produtos.join(", ")}]))`);
    }

    let allWhere = whereProdutos
      ? Sequelize.and(where, whereProdutos)
      : where;


    produtos = await Produto.findAll({
      attributes: [[Sequelize.literal('(array_agg("id"))[1]'), 'id'], 'name', [Sequelize.literal('(array_agg("description"))[1]'), 'description'], 'id_categoria'],
      where: allWhere,
      group: ['name', 'id_categoria']
    });

    return res.json({ lista: produtos });
  },


  async detalhamentoPorMercado(req, res) {
    let produtos = [];
    let where = { status: true };
    if (req.body.id_mercado) {
      where["id_mercado"] = req.body.id_mercado;
    }

    where["status"] = req.body.status ?? true;

    let whereProdutos = null;
    if (req.body.id_produtos) {
      whereProdutos = Sequelize.literal(`name ILIKE ANY (obter_padroes_nome(array[${req.body.id_produtos.join(", ")}]))`);
    }

    let allWhere = whereProdutos
      ? Sequelize.and(where, whereProdutos)
      : where;


    produtos = await Produto.findAll({
      where: allWhere
    });

    return res.json({ lista: produtos });
  },



  async recuperarProdutos(req, res) {
    let entity = req.body;
    let where = {};

    if (entity.filtro !== undefined && entity.filtro !== null && entity.filtro.length > 0) {
      where = { name: { [Op.iLike]: `%${entity.filtro}%` } };
    }

    let produtos = [];
    produtos = await Produto.findAll({
      where: where,
      order: [["name", "asc"]],
      include: [
        {
          model: Categoria,
          as: 'categoria',
          attributes: ['title'],
        },
        {
          model: Mercado,
          as: 'mercado',
          attributes: ['name'],
        }
      ],
    });
    return res.json(produtos);
  },

  async recuperarProduto(req, res) {
    try {
      const produtos = await Produto.findByPk(req.params.id);
      if (!produtos) {
        return res.json({ error: true, message: "Produto não encontrada", erros: [] });
      }

      return res.json({ error: false, message: "", erros: [], produto: produtos });
    } catch (error) {
      return res.json({ error: true, message: "Falha ao recuperar a produto", erros: [] });
    }
  },
};

function isNumeric(value) {
  return (value == Number(value)) ? "number" : "string"
}

function parseDinheiro(value) {
  if (value === null || value === undefined || value === "") return "";
  return Number(`${value}`.replace(/\D/g, "")) / 100;
};

function validarProduto(produto) {
  const erros = {};

  if (produto === null || produto === undefined) {
    return { error: true, message: "Não foi possível identificar os dados do produto", erros: erros };
  }

  if (produto.id_categoria === undefined || produto.id_categoria === null) {
    erros["id_categoria"] = "O campo categoria é obrigatório";
  }

  if (produto.id_mercado === undefined || produto.id_mercado === null) {
    erros["id_mercado"] = "O campo mercado é obrigatório";
  }


  if (
    produto.name !== undefined &&
    produto.name !== null &&
    produto.name.length > 0
  ) {
    if (produto.name.length <= 3) {
      erros["name"] = "O campo nome deve ter ao menos 4 caracteres";
    }
  } else {
    erros["name"] = "O campo nome é obrigatório";
  }


  if (produto.price === undefined || produto.price === null) {
    erros["price"] = "O campo preço é obrigatório";
  } else if (isNumeric(produto.price) != "number") {
    erros["price"] = "O campo preço precisa ser um valor numérico";
  }


  if (Object.keys(erros).length === 0) {
    return { error: false, message: "Produto válido", erros: [] };
  } else {
    return { error: true, message: "Validação falhou", erros: erros };
  }
}
