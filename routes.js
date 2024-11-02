
const express = require("express");
const routes = express.Router();
const jwt = require('jsonwebtoken');

var cors = require('cors');
routes.use(cors());



const CategoriaController = require("./src/controllers/CategoriaController");

routes.get("/v1/recuperarCategorias", CategoriaController.recuperarCategorias);


const ProdutoController = require("./src/controllers/ProdutoController");

routes.post("/v1/recuperarProdutosPorCategoriaMercado", ProdutoController.recuperarProdutosPorCategoriaMercado)
    .post("/v1/detalhamentoPorMercado", ProdutoController.detalhamentoPorMercado);


const MercadoController = require("./src/controllers/MercadoController");

routes.post("/v1/recuperarMercadPorProdutos", MercadoController.recuperarMercadPorProdutos)
    .get("/v1/recuperarMercados", verifyJWT, MercadoController.recuperarMercados);



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