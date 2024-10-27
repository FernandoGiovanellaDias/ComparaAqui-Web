const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    async gerar(req, res) {
        const id = uuidv4();
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300,
        });
        return res.json({ token: token, timeAcess: 300*1000});
    }
};
