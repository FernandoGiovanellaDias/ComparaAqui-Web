
const express = require("express");
const routes = express.Router();
const jwt = require('jsonwebtoken');

var cors = require('cors');
routes.use(cors());



const CategoriaController = require("./src/controllers/CategoriaController");

routes.get("/v1/recuperarCategorias", CategoriaController.recuperarCategoriasAtivas)
    .post("/v1/buscarCategorias", verifyJWT, CategoriaController.recuperarCategorias)
    .post("/v1/Categorias", verifyJWT, CategoriaController.criarCategoria)
    .put("/v1/Categorias/:id", verifyJWT, CategoriaController.editarCategoria)
    .get("/v1/Categorias/:id", verifyJWT, CategoriaController.recuperarCategoria)
    .delete("/v1/Categorias/:id", verifyJWT, CategoriaController.deletarCategoria);


const ProdutoController = require("./src/controllers/ProdutoController");

routes.post("/v1/recuperarProdutosPorCategoriaMercado", ProdutoController.recuperarProdutosPorCategoriaMercado)
    .post("/v1/detalhamentoPorMercado", ProdutoController.detalhamentoPorMercado);


const MercadoController = require("./src/controllers/MercadoController");

routes.post("/v1/recuperarMercadPorProdutos", MercadoController.recuperarMercadPorProdutos)
    .post("/v1/recuperarMercados", verifyJWT, MercadoController.recuperarMercados)
    .post("/v1/Mercados", verifyJWT, MercadoController.criarMercado)
    .put("/v1/Mercados/:id", verifyJWT, MercadoController.editarMercado)
    .get("/v1/Mercados/:id", verifyJWT, MercadoController.recuperarMercado)
    .delete("/v1/Mercados/:id", verifyJWT, MercadoController.deletarMercado);


const UsuarioController = require("./src/controllers/UsuarioController");

routes.post("/v1/Usuarios", verifyJWT, UsuarioController.criarUsuario)
    .put("/v1/Usuarios/:token_account", verifyJWT, UsuarioController.editarUsuario)
    .get("/v1/Usuarios/:token_account", verifyJWT, UsuarioController.recuperarUsuario)
    .post("/v1/login", verifyJWT, UsuarioController.login)
    .delete("/v1/Usuarios/:token_account", verifyJWT, UsuarioController.deletarUsuario);


const SecaoController = require("./src/controllers/SecaoController");
routes.get("/v1/criarSecao", SecaoController.gerar);


module.exports = routes;





function verifyJWT(req, res, next) {
    const token = (req.headers.authorization ?? "").split(' ')[1];
    if (!token) return res.status(401).json({ message: "Token não fornecido" });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err)
            return res.status(500).json({ auth: false, message: "Token inválido" });

        req.userId = decoded.id;
        next();
    });
}