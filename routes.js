
const express = require("express");
const routes = express.Router();
const jwt = require('jsonwebtoken');

var cors = require('cors');
routes.use(cors());



const SolicitacaoController = require("./src/controllers/SolicitacaoController");


routes.post("/v1/recuperarSolicitacoes", verifyJWT, SolicitacaoController.recuperarSolicitacoes)
    .post("/v1/Solicitacoes", verifyJWT, SolicitacaoController.criarSolicitacao)
    .put("/v1/Solicitacoes/:id", verifyJWT, SolicitacaoController.editarSolicitacao)
    .get("/v1/Solicitacoes/:id", verifyJWT, SolicitacaoController.recuperarSolicitacao)
    .delete("/v1/Solicitacoes/:id", verifyJWT, SolicitacaoController.deletarSolicitacao);


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