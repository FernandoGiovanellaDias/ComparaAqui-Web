
const express = require("express");
const routes = express.Router();

require("dotenv/config");
const conn = require("./src/conn");




const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));
module.exports = routes;

conn.authenticate().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(PORT, () => {
    console.log(`Serviço iniciado na porta ${PORT}`);
});


