const { Usuario } = require('../../models'); 
const { v4: uuidv4 } = require('uuid');

function formatarRetornoUsuario(usuario) {
    delete usuario.senha;
    delete usuario.id;
    delete usuario.createdAt;
    delete usuario.updatedAt;
    return { tokenAccount: usuario.token_account, urType: usuario.ur_type, usuario: usuario };
}

module.exports = {
    async criarUsuario(req, res) {
        let val = validarUsuario(req.body);
        if (val.error) {
            return res.json(val);
        }
        if (req.body.id !== undefined && req.body.id !== null && req.body.id !== "") {
            if (req.body.id !== 0) {
                return res.json({ error: true, message: "O Usuário que está sendo criado já existe" });
            }
            req.body.id = null;
        }

        req.body.ur_type = 1;
        req.body.token_account = uuidv4();
        try {
            const usuario = await Usuario.create(req.body);
            return res.json(formatarRetornoUsuario(usuario));
        } catch (error) {
            console.error(error);
            return res.json({ error: true, message: "Falha ao salvar usuário" });
        }
    },

    async editarUsuario(req, res) {
        let val = validarUsuario(req.body);
        if (val.error) {
            return res.json(val);
        }
        
        const editUsuario = await Usuario.findOne({where: {token_account: req.params.token_account}});
        if(editUsuario == null){
            return res.json({ error: true, message: "Usuário não existe" });
        }
        editUsuario.nome = req.body.nome;

        try {
            const usuario = await editUsuario.save();

            return res.json(formatarRetornoUsuario(usuario));
        } catch (error) {
            console.error(error);
            return res.json({ error: true, message: "Falha ao salvar usuário" });
        }
    },

    async deletarUsuario(req, res) {
        try {
            await Usuario.destroy({
                where: { id: req.params.id },
            });
            return res.sendStatus(200);
        } catch (error) {
            console.error(error);
            return res.json({ error: true, message: "Falha ao salvar solicitação" });
        }
    },
    async recuperarUsuario(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            return res.json(formatarRetornoUsuario(usuario));
        } catch (error) {
            console.error(error);
            return res.json({ error: true, message: "Falha ao recuperar usuário" });
        }
    },
    async login(req, res) {
        try {
            const usuario = await Usuario.findOne({where: {email: req.body.email, senha: req.body.senha}});
            if(usuario == null){
                return res.json({ error: true, message: "Usuário não existe" });
            }
            return res.json(formatarRetornoUsuario(usuario));
        } catch (error) {
            console.error(error);
            return res.json({ error: true, message: "Falha ao recuperar usuário" });
        }
    },
};

function validarUsuario(usuario) {
    const erros = {};

    if (!usuario.nome || usuario.nome.length === 0) {
        erros["nome"] = "O campo nome é obrigatório";
    } else if (usuario.nome.length <= 3) {
        erros["nome"] = "O campo nome deve ter ao menos 4 caracteres";
    }

    if (usuario.email && usuario.email.length > 0) {
        if (usuario.email.replace(/[^\d]/g, "").length !== 11 && usuario.email.replace(/[^\d]/g, "").length !== 14) {
            erros["email"] = "O email inserido está incorreto";
        }
    } else {
        erros["email"] = "O campo email é obrigatório";
    }

    if (!usuario.senha || usuario.senha.length === 0) {
        erros["senha"] = "O campo senha é obrigatório";
    }

    if (Object.keys(erros).length === 0) {
        return { error: false, message: "Solicitação válida", erros: [] };
    } else {
        return { error: true, message: "Validação falhou", erros: erros };
    }
}
