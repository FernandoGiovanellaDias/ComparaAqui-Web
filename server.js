const path = require('path');
const express = require("express");
const routes = express.Router();

require("dotenv/config");
const conn = require("./src/conn");




const PORT = process.env.PORT;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


app.use('/api', require('./routes'));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
module.exports = routes;

conn.authenticate().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(PORT, () => {
    console.log(`Serviço iniciado na porta ${PORT}`);
});


