"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "produto",
      [
        {
          id: 1,
          name: "Sabão em Pó",
          description: "Sabão em Pó da categoria Limpeza disponível no mercado Caita",
          //categoria: "Limpeza",
          price: 19.2,
          id_categoria: 1,
          id_mercado: 1,
          status: true
        },
        {
          id: 3,
          name: "Limpador Multiuso",
          description: "Limpador Multiuso da categoria Limpeza disponível no mercado Caita",
          //categoria: "Limpeza",
          price: 423.8,
          id_categoria: 1,
          id_mercado: 1,
          status: true
        },
        {
          id: 4,
          name: "Detergente",
          description: "Detergente da categoria Limpeza disponível no mercado Grepar",
          //categoria: "Limpeza",
          price: 478.31,
          id_categoria: 1,
          id_mercado: 2,
          status: true
        },
        {
          id: 6,
          name: "Limpador Multiuso",
          description: "Limpador Multiuso da categoria Limpeza disponível no mercado Grepar",
          //categoria: "Limpeza",
          price: 15.69,
          id_categoria: 1,
          id_mercado: 2,
          status: true
        },
        {
          id: 7,
          name: "Desinfetante",
          description: "Desinfetante da categoria Limpeza disponível no mercado Walmart.",
          //categoria: "Limpeza",
          price: 361.76,
          id_categoria: 1,
          id_mercado: 3,
          status: true
        },
        {
          id: 8,
          name: "Detergente",
          description: "Detergente da categoria Limpeza disponível no mercado Walmart.",
          //categoria: "Limpeza",
          price: 184.79,
          id_categoria: 1,
          id_mercado: 3,
          status: true
        },
        {
          id: 10,
          name: "Limpador Multiuso",
          description: "Limpador Multiuso da categoria Limpeza disponível no mercado Tesco.",
          //categoria: "Limpeza",
          price: 402.9,
          id_categoria: 1,
          id_mercado: 4,
          status: true
        },
        {
          id: 11,
          name: "Sabão em Pó",
          description: "Sabão em Pó da categoria Limpeza disponível no mercado Tesco.",
          //categoria: "Limpeza",
          price: 299.67,
          id_categoria: 1,
          id_mercado: 4,
          status: true
        },
        {
          id: 13,
          name: "Detergente",
          description: "Detergente da categoria Limpeza disponível no mercado Assaí Atacadista.",
          //categoria: "Limpeza",
          price: 6.06,
          id_categoria: 1,
          id_mercado: 5,
          status: true
        },
        {
          id: 14,
          name: "Alvejante",
          description: "Alvejante da categoria Limpeza disponível no mercado Assaí Atacadista.",
          //categoria: "Limpeza",
          price: 265.67,
          id_categoria: 1,
          id_mercado: 5,
          status: true
        },
        {
          id: 15,
          name: "Desinfetante",
          description: "Desinfetante da categoria Limpeza disponível no mercado Assaí Atacadista.",
          //categoria: "Limpeza",
          price: 134.77,
          id_categoria: 1,
          id_mercado: 5,
          status: true
        },
        {
          id: 16,
          name: "Sabão em Pó",
          description: "Sabão em Pó da categoria Limpeza disponível no mercado Cencosud Brasil.",
          //categoria: "Limpeza",
          price: 349.91,
          id_categoria: 1,
          id_mercado: 6,
          status: true
        },
        {
          id: 17,
          name: "Limpador Multiuso",
          description: "Limpador Multiuso da categoria Limpeza disponível no mercado Cencosud Brasil.",
          //categoria: "Limpeza",
          price: 140.71,
          id_categoria: 1,
          id_mercado: 6,
          status: true
        },
        {
          id: 18,
          name: "Desinfetante",
          description: "Desinfetante da categoria Limpeza disponível no mercado Cencosud Brasil.",
          //categoria: "Limpeza",
          price: 227.13,
          id_categoria: 1,
          id_mercado: 6,
          status: true
        },
        {
          id: 31,
          name: "Caixa de Som Bluetooth",
          description: "Caixa de Som Bluetooth da categoria Eletrônicos disponível no mercado Caita",
          //categoria: "Eletrônicos",
          price: 139.88,
          id_categoria: 2,
          id_mercado: 1,
          status: true
        },
        {
          id: 32,
          name: "Notebook",
          description: "Notebook da categoria Eletrônicos disponível no mercado Caita",
          //categoria: "Eletrônicos",
          price: 168.56,
          id_categoria: 2,
          id_mercado: 1,
          status: true
        },
        {
          id: 34,
          name: "Notebook",
          description: "Notebook da categoria Eletrônicos disponível no mercado Grepar",
          //categoria: "Eletrônicos",
          price: 150.01,
          id_categoria: 2,
          id_mercado: 2,
          status: true
        },
        {
          id: 36,
          name: "Tablet",
          description: "Tablet da categoria Eletrônicos disponível no mercado Grepar",
          //categoria: "Eletrônicos",
          price: 324.34,
          id_categoria: 2,
          id_mercado: 2,
          status: true
        },
        {
          id: 37,
          name: "Caixa de Som Bluetooth",
          description: "Caixa de Som Bluetooth da categoria Eletrônicos disponível no mercado Walmart.",
          //categoria: "Eletrônicos",
          price: 69.75,
          id_categoria: 2,
          id_mercado: 3,
          status: true
        },
        {
          id: 38,
          name: "Smartphone",
          description: "Smartphone da categoria Eletrônicos disponível no mercado Walmart.",
          //categoria: "Eletrônicos",
          price: 478.05,
          id_categoria: 2,
          id_mercado: 3,
          status: true
        },
        {
          id: 39,
          name: "Notebook",
          description: "Notebook da categoria Eletrônicos disponível no mercado Walmart.",
          //categoria: "Eletrônicos",
          price: 360.51,
          id_categoria: 2,
          id_mercado: 3,
          status: true
        },
        {
          id: 40,
          name: "Notebook",
          description: "Notebook da categoria Eletrônicos disponível no mercado Tesco.",
          //categoria: "Eletrônicos",
          price: 419.83,
          id_categoria: 2,
          id_mercado: 4,
          status: true
        },
        {
          id: 42,
          name: "Tablet",
          description: "Tablet da categoria Eletrônicos disponível no mercado Tesco.",
          //categoria: "Eletrônicos",
          price: 480.83,
          id_categoria: 2,
          id_mercado: 4,
          status: true
        },
        {
          id: 43,
          name: "Tablet",
          description: "Tablet da categoria Eletrônicos disponível no mercado Assaí Atacadista.",
          //categoria: "Eletrônicos",
          price: 287.02,
          id_categoria: 2,
          id_mercado: 5,
          status: true
        },
        {
          id: 44,
          name: "Smart TV",
          description: "Smart TV da categoria Eletrônicos disponível no mercado Assaí Atacadista.",
          //categoria: "Eletrônicos",
          price: 274.67,
          id_categoria: 2,
          id_mercado: 5,
          status: true
        },
        {
          id: 46,
          name: "Smart TV",
          description: "Smart TV da categoria Eletrônicos disponível no mercado Cencosud Brasil.",
          //categoria: "Eletrônicos",
          price: 121.51,
          id_categoria: 2,
          id_mercado: 6,
          status: true
        },
        {
          id: 47,
          name: "Caixa de Som Bluetooth",
          description: "Caixa de Som Bluetooth da categoria Eletrônicos disponível no mercado Cencosud Brasil.",
          //categoria: "Eletrônicos",
          price: 451.97,
          id_categoria: 2,
          id_mercado: 6,
          status: true
        },
        {
          id: 48,
          name: "Tablet",
          description: "Tablet da categoria Eletrônicos disponível no mercado Cencosud Brasil.",
          //categoria: "Eletrônicos",
          price: 457.42,
          id_categoria: 2,
          id_mercado: 6,
          status: true
        },
        {
          id: 61,
          name: "Pá de Jardim",
          description: "Pá de Jardim da categoria Jardinagem disponível no mercado Caita",
          //categoria: "Jardinagem",
          price: 432.36,
          id_categoria: 3,
          id_mercado: 1,
          status: true
        },
        {
          id: 62,
          name: "Regador",
          description: "Regador da categoria Jardinagem disponível no mercado Caita",
          //categoria: "Jardinagem",
          price: 233.88,
          id_categoria: 3,
          id_mercado: 1,
          status: true
        },
        {
          id: 63,
          name: "Sementes",
          description: "Sementes da categoria Jardinagem disponível no mercado Caita",
          //categoria: "Jardinagem",
          price: 165.23,
          id_categoria: 3,
          id_mercado: 1,
          status: true
        },
        {
          id: 64,
          name: "Enxada",
          description: "Enxada da categoria Jardinagem disponível no mercado Grepar",
          //categoria: "Jardinagem",
          price: 276.95,
          id_categoria: 3,
          id_mercado: 2,
          status: true
        },
        {
          id: 65,
          name: "Sementes",
          description: "Sementes da categoria Jardinagem disponível no mercado Grepar",
          //categoria: "Jardinagem",
          price: 461.49,
          id_categoria: 3,
          id_mercado: 2,
          status: true
        },
        {
          id: 67,
          name: "Regador",
          description: "Regador da categoria Jardinagem disponível no mercado Walmart.",
          //categoria: "Jardinagem",
          price: 199.15,
          id_categoria: 3,
          id_mercado: 3,
          status: true
        },
        {
          id: 70,
          name: "Tesoura de Poda",
          description: "Tesoura de Poda da categoria Jardinagem disponível no mercado Tesco.",
          //categoria: "Jardinagem",
          price: 287.43,
          id_categoria: 3,
          id_mercado: 4,
          status: true
        },
        {
          id: 71,
          name: "Enxada",
          description: "Enxada da categoria Jardinagem disponível no mercado Tesco.",
          //categoria: "Jardinagem",
          price: 253.01,
          id_categoria: 3,
          id_mercado: 4,
          status: true
        },
        {
          id: 72,
          name: "Pá de Jardim",
          description: "Pá de Jardim da categoria Jardinagem disponível no mercado Tesco.",
          //categoria: "Jardinagem",
          price: 9.3,
          id_categoria: 3,
          id_mercado: 4,
          status: true
        },
        {
          id: 73,
          name: "Tesoura de Poda",
          description: "Tesoura de Poda da categoria Jardinagem disponível no mercado Assaí Atacadista.",
          //categoria: "Jardinagem",
          price: 226.3,
          id_categoria: 3,
          id_mercado: 5,
          status: true
        },
        {
          id: 74,
          name: "Pá de Jardim",
          description: "Pá de Jardim da categoria Jardinagem disponível no mercado Assaí Atacadista.",
          //categoria: "Jardinagem",
          price: 344.26,
          id_categoria: 3,
          id_mercado: 5,
          status: true
        },
        {
          id: 76,
          name: "Tesoura de Poda",
          description: "Tesoura de Poda da categoria Jardinagem disponível no mercado Cencosud Brasil.",
          //categoria: "Jardinagem",
          price: 29.89,
          id_categoria: 3,
          id_mercado: 6,
          status: true
        },
        {
          id: 77,
          name: "Pá de Jardim",
          description: "Pá de Jardim da categoria Jardinagem disponível no mercado Cencosud Brasil.",
          //categoria: "Jardinagem",
          price: 229.58,
          id_categoria: 3,
          id_mercado: 6,
          status: true
        },
        {
          id: 78,
          name: "Sementes",
          description: "Sementes da categoria Jardinagem disponível no mercado Cencosud Brasil.",
          //categoria: "Jardinagem",
          price: 278.9,
          id_categoria: 3,
          id_mercado: 6,
          status: true
        },
        {
          id: 91,
          name: "Morango",
          description: "Morango da categoria Frutas disponível no mercado Caita",
          //categoria: "Frutas",
          price: 77.87,
          id_categoria: 4,
          id_mercado: 1,
          status: true
        },
        {
          id: 92,
          name: "Laranja",
          description: "Laranja da categoria Frutas disponível no mercado Caita",
          //categoria: "Frutas",
          price: 389.68,
          id_categoria: 4,
          id_mercado: 1,
          status: true
        },
        {
          id: 93,
          name: "Banana",
          description: "Banana da categoria Frutas disponível no mercado Caita",
          //categoria: "Frutas",
          price: 160.3,
          id_categoria: 4,
          id_mercado: 1,
          status: true
        },
        {
          id: 94,
          name: "Pera",
          description: "Pera da categoria Frutas disponível no mercado Grepar",
          //categoria: "Frutas",
          price: 445.02,
          id_categoria: 4,
          id_mercado: 2,
          status: true
        },
        {
          id: 95,
          name: "Morango",
          description: "Morango da categoria Frutas disponível no mercado Grepar",
          //categoria: "Frutas",
          price: 196.78,
          id_categoria: 4,
          id_mercado: 2,
          status: true
        },
        {
          id: 96,
          name: "Maçã",
          description: "Maçã da categoria Frutas disponível no mercado Grepar",
          //categoria: "Frutas",
          price: 249.31,
          id_categoria: 4,
          id_mercado: 2,
          status: true
        },
        {
          id: 97,
          name: "Banana",
          description: "Banana da categoria Frutas disponível no mercado Walmart.",
          //categoria: "Frutas",
          price: 331.12,
          id_categoria: 4,
          id_mercado: 3,
          status: true
        },
        {
          id: 99,
          name: "Maçã",
          description: "Maçã da categoria Frutas disponível no mercado Walmart.",
          //categoria: "Frutas",
          price: 244.87,
          id_categoria: 4,
          id_mercado: 3,
          status: true
        },
        {
          id: 100,
          name: "Morango",
          description: "Morango da categoria Frutas disponível no mercado Tesco.",
          //categoria: "Frutas",
          price: 183.45,
          id_categoria: 4,
          id_mercado: 4,
          status: true
        },
        {
          id: 101,
          name: "Banana",
          description: "Banana da categoria Frutas disponível no mercado Tesco.",
          //categoria: "Frutas",
          price: 127.04,
          id_categoria: 4,
          id_mercado: 4,
          status: true
        },
        {
          id: 102,
          name: "Maçã",
          description: "Maçã da categoria Frutas disponível no mercado Tesco.",
          //categoria: "Frutas",
          price: 190.97,
          id_categoria: 4,
          id_mercado: 4,
          status: true
        },
        {
          id: 103,
          name: "Laranja",
          description: "Laranja da categoria Frutas disponível no mercado Assaí Atacadista.",
          //categoria: "Frutas",
          price: 482.52,
          id_categoria: 4,
          id_mercado: 5,
          status: true
        },
        {
          id: 104,
          name: "Maçã",
          description: "Maçã da categoria Frutas disponível no mercado Assaí Atacadista.",
          //categoria: "Frutas",
          price: 494.79,
          id_categoria: 4,
          id_mercado: 5,
          status: true
        },
        {
          id: 106,
          name: "Banana",
          description: "Banana da categoria Frutas disponível no mercado Cencosud Brasil.",
          //categoria: "Frutas",
          price: 270.91,
          id_categoria: 4,
          id_mercado: 6,
          status: true
        },
        {
          id: 107,
          name: "Laranja",
          description: "Laranja da categoria Frutas disponível no mercado Cencosud Brasil.",
          //categoria: "Frutas",
          price: 197.5,
          id_categoria: 4,
          id_mercado: 6,
          status: true
        },
        {
          id: 121,
          name: "Alface",
          description: "Alface da categoria Vegetais disponível no mercado Caita",
          //categoria: "Vegetais",
          price: 10.86,
          id_categoria: 5,
          id_mercado: 1,
          status: true
        },
        {
          id: 122,
          name: "Pepino",
          description: "Pepino da categoria Vegetais disponível no mercado Caita",
          //categoria: "Vegetais",
          price: 406.73,
          id_categoria: 5,
          id_mercado: 1,
          status: true
        },
        {
          id: 124,
          name: "Brócolis",
          description: "Brócolis da categoria Vegetais disponível no mercado Grepar",
          //categoria: "Vegetais",
          price: 18.02,
          id_categoria: 5,
          id_mercado: 2,
          status: true
        },
        {
          id: 125,
          name: "Cenoura",
          description: "Cenoura da categoria Vegetais disponível no mercado Grepar",
          //categoria: "Vegetais",
          price: 441.45,
          id_categoria: 5,
          id_mercado: 2,
          status: true
        },
        {
          id: 127,
          name: "Pepino",
          description: "Pepino da categoria Vegetais disponível no mercado Walmart.",
          //categoria: "Vegetais",
          price: 417.8,
          id_categoria: 5,
          id_mercado: 3,
          status: true
        },
        {
          id: 128,
          name: "Brócolis",
          description: "Brócolis da categoria Vegetais disponível no mercado Walmart.",
          //categoria: "Vegetais",
          price: 294.79,
          id_categoria: 5,
          id_mercado: 3,
          status: true
        },
        {
          id: 129,
          name: "Tomate",
          description: "Tomate da categoria Vegetais disponível no mercado Walmart.",
          //categoria: "Vegetais",
          price: 347.23,
          id_categoria: 5,
          id_mercado: 3,
          status: true
        },
        {
          id: 130,
          name: "Pepino",
          description: "Pepino da categoria Vegetais disponível no mercado Tesco.",
          //categoria: "Vegetais",
          price: 300.37,
          id_categoria: 5,
          id_mercado: 4,
          status: true
        },
        {
          id: 131,
          name: "Alface",
          description: "Alface da categoria Vegetais disponível no mercado Tesco.",
          //categoria: "Vegetais",
          price: 357.73,
          id_categoria: 5,
          id_mercado: 4,
          status: true
        },
        {
          id: 133,
          name: "Cenoura",
          description: "Cenoura da categoria Vegetais disponível no mercado Assaí Atacadista.",
          //categoria: "Vegetais",
          price: 442.03,
          id_categoria: 5,
          id_mercado: 5,
          status: true
        },
        {
          id: 135,
          name: "Pepino",
          description: "Pepino da categoria Vegetais disponível no mercado Assaí Atacadista.",
          //categoria: "Vegetais",
          price: 197.11,
          id_categoria: 5,
          id_mercado: 5,
          status: true
        },
        {
          id: 136,
          name: "Tomate",
          description: "Tomate da categoria Vegetais disponível no mercado Cencosud Brasil.",
          //categoria: "Vegetais",
          price: 471.88,
          id_categoria: 5,
          id_mercado: 6,
          status: true
        },
        {
          id: 137,
          name: "Pepino",
          description: "Pepino da categoria Vegetais disponível no mercado Cencosud Brasil.",
          //categoria: "Vegetais",
          price: 382.44,
          id_categoria: 5,
          id_mercado: 6,
          status: true
        },
        {
          id: 151,
          name: "Pote de Vidro",
          description: "Pote de Vidro da categoria Para Microondas disponível no mercado Caita",
          //categoria: "Para Microondas",
          price: 213.75,
          id_categoria: 6,
          id_mercado: 1,
          status: true
        },
        {
          id: 153,
          name: "Caneca",
          description: "Caneca da categoria Para Microondas disponível no mercado Caita",
          //categoria: "Para Microondas",
          price: 61.08,
          id_categoria: 6,
          id_mercado: 1,
          status: true
        },
        {
          id: 154,
          name: "Forma de Silicone",
          description: "Forma de Silicone da categoria Para Microondas disponível no mercado Grepar",
          //categoria: "Para Microondas",
          price: 200.98,
          id_categoria: 6,
          id_mercado: 2,
          status: true
        },
        {
          id: 156,
          name: "Prato",
          description: "Prato da categoria Para Microondas disponível no mercado Grepar",
          //categoria: "Para Microondas",
          price: 240.99,
          id_categoria: 6,
          id_mercado: 2,
          status: true
        },
        {
          id: 157,
          name: "Pote de Vidro",
          description: "Pote de Vidro da categoria Para Microondas disponível no mercado Walmart.",
          //categoria: "Para Microondas",
          price: 70.78,
          id_categoria: 6,
          id_mercado: 3,
          status: true
        },
        {
          id: 158,
          name: "Recipiente",
          description: "Recipiente da categoria Para Microondas disponível no mercado Walmart.",
          //categoria: "Para Microondas",
          price: 240.94,
          id_categoria: 6,
          id_mercado: 3,
          status: true
        },
        {
          id: 160,
          name: "Caneca",
          description: "Caneca da categoria Para Microondas disponível no mercado Tesco.",
          //categoria: "Para Microondas",
          price: 290.23,
          id_categoria: 6,
          id_mercado: 4,
          status: true
        },
        {
          id: 161,
          name: "Recipiente",
          description: "Recipiente da categoria Para Microondas disponível no mercado Tesco.",
          //categoria: "Para Microondas",
          price: 468.23,
          id_categoria: 6,
          id_mercado: 4,
          status: true
        },
        {
          id: 163,
          name: "Pote de Vidro",
          description: "Pote de Vidro da categoria Para Microondas disponível no mercado Assaí Atacadista.",
          //categoria: "Para Microondas",
          price: 148.09,
          id_categoria: 6,
          id_mercado: 5,
          status: true
        },
        {
          id: 164,
          name: "Forma de Silicone",
          description: "Forma de Silicone da categoria Para Microondas disponível no mercado Assaí Atacadista.",
          //categoria: "Para Microondas",
          price: 431.55,
          id_categoria: 6,
          id_mercado: 5,
          status: true
        },
        {
          id: 166,
          name: "Caneca",
          description: "Caneca da categoria Para Microondas disponível no mercado Cencosud Brasil.",
          //categoria: "Para Microondas",
          price: 481.33,
          id_categoria: 6,
          id_mercado: 6,
          status: true
        },
        {
          id: 168,
          name: "Pote de Vidro",
          description: "Pote de Vidro da categoria Para Microondas disponível no mercado Cencosud Brasil.",
          //categoria: "Para Microondas",
          price: 169.42,
          id_categoria: 6,
          id_mercado: 6,
          status: true
        },
        {
          id: 181,
          name: "Shampoo",
          description: "Shampoo da categoria Higiêne disponível no mercado Caita",
          //categoria: "Higiêne",
          price: 23.2,
          id_categoria: 7,
          id_mercado: 1,
          status: true
        },
        {
          id: 182,
          name: "Creme Dental",
          description: "Creme Dental da categoria Higiêne disponível no mercado Caita",
          //categoria: "Higiêne",
          price: 138.66,
          id_categoria: 7,
          id_mercado: 1,
          status: true
        },
        {
          id: 183,
          name: "Desodorante",
          description: "Desodorante da categoria Higiêne disponível no mercado Caita",
          //categoria: "Higiêne",
          price: 230.8,
          id_categoria: 7,
          id_mercado: 1,
          status: true
        },
        {
          id: 184,
          name: "Sabonete",
          description: "Sabonete da categoria Higiêne disponível no mercado Grepar",
          //categoria: "Higiêne",
          price: 462.53,
          id_categoria: 7,
          id_mercado: 2,
          status: true
        },
        {
          id: 185,
          name: "Condicionador",
          description: "Condicionador da categoria Higiêne disponível no mercado Grepar",
          //categoria: "Higiêne",
          price: 369.26,
          id_categoria: 7,
          id_mercado: 2,
          status: true
        },
        {
          id: 186,
          name: "Shampoo",
          description: "Shampoo da categoria Higiêne disponível no mercado Grepar",
          //categoria: "Higiêne",
          price: 193.67,
          id_categoria: 7,
          id_mercado: 2,
          status: true
        },
        {
          id: 187,
          name: "Creme Dental",
          description: "Creme Dental da categoria Higiêne disponível no mercado Walmart.",
          //categoria: "Higiêne",
          price: 450.97,
          id_categoria: 7,
          id_mercado: 3,
          status: true
        },
        {
          id: 189,
          name: "Sabonete",
          description: "Sabonete da categoria Higiêne disponível no mercado Walmart.",
          //categoria: "Higiêne",
          price: 121.86,
          id_categoria: 7,
          id_mercado: 3,
          status: true
        },
        {
          id: 190,
          name: "Sabonete",
          description: "Sabonete da categoria Higiêne disponível no mercado Tesco.",
          //categoria: "Higiêne",
          price: 9.87,
          id_categoria: 7,
          id_mercado: 4,
          status: true
        },
        {
          id: 191,
          name: "Desodorante",
          description: "Desodorante da categoria Higiêne disponível no mercado Tesco.",
          //categoria: "Higiêne",
          price: 303.95,
          id_categoria: 7,
          id_mercado: 4,
          status: true
        },
        {
          id: 192,
          name: "Creme Dental",
          description: "Creme Dental da categoria Higiêne disponível no mercado Tesco.",
          //categoria: "Higiêne",
          price: 39.62,
          id_categoria: 7,
          id_mercado: 4,
          status: true
        },
        {
          id: 193,
          name: "Shampoo",
          description: "Shampoo da categoria Higiêne disponível no mercado Assaí Atacadista.",
          //categoria: "Higiêne",
          price: 390.12,
          id_categoria: 7,
          id_mercado: 5,
          status: true
        },
        {
          id: 194,
          name: "Creme Dental",
          description: "Creme Dental da categoria Higiêne disponível no mercado Assaí Atacadista.",
          //categoria: "Higiêne",
          price: 247.43,
          id_categoria: 7,
          id_mercado: 5,
          status: true
        },
        {
          id: 195,
          name: "Sabonete",
          description: "Sabonete da categoria Higiêne disponível no mercado Assaí Atacadista.",
          //categoria: "Higiêne",
          price: 421.34,
          id_categoria: 7,
          id_mercado: 5,
          status: true
        },
        {
          id: 196,
          name: "Desodorante",
          description: "Desodorante da categoria Higiêne disponível no mercado Cencosud Brasil.",
          //categoria: "Higiêne",
          price: 119.82,
          id_categoria: 7,
          id_mercado: 6,
          status: true
        },
        {
          id: 197,
          name: "Creme Dental",
          description: "Creme Dental da categoria Higiêne disponível no mercado Cencosud Brasil.",
          //categoria: "Higiêne",
          price: 378.11,
          id_categoria: 7,
          id_mercado: 6,
          status: true
        },
        {
          id: 198,
          name: "Sabonete",
          description: "Sabonete da categoria Higiêne disponível no mercado Cencosud Brasil.",
          //categoria: "Higiêne",
          price: 199.02,
          id_categoria: 7,
          id_mercado: 6,
          status: true
        },
        {
          id: 211,
          name: "Calça",
          description: "Calça da categoria Vestuário disponível no mercado Caita",
          //categoria: "Vestuário",
          price: 430.95,
          id_categoria: 8,
          id_mercado: 1,
          status: true
        },
        {
          id: 213,
          name: "Bermuda",
          description: "Bermuda da categoria Vestuário disponível no mercado Caita",
          //categoria: "Vestuário",
          price: 55.64,
          id_categoria: 8,
          id_mercado: 1,
          status: true
        },
        {
          id: 214,
          name: "Calça",
          description: "Calça da categoria Vestuário disponível no mercado Grepar",
          //categoria: "Vestuário",
          price: 463.75,
          id_categoria: 8,
          id_mercado: 2,
          status: true
        },
        {
          id: 215,
          name: "Chapéu",
          description: "Chapéu da categoria Vestuário disponível no mercado Grepar",
          //categoria: "Vestuário",
          price: 173.09,
          id_categoria: 8,
          id_mercado: 2,
          status: true
        },
        {
          id: 216,
          name: "Jaqueta",
          description: "Jaqueta da categoria Vestuário disponível no mercado Grepar",
          //categoria: "Vestuário",
          price: 174.06,
          id_categoria: 8,
          id_mercado: 2,
          status: true
        },
        {
          id: 217,
          name: "Calça",
          description: "Calça da categoria Vestuário disponível no mercado Walmart.",
          //categoria: "Vestuário",
          price: 195.31,
          id_categoria: 8,
          id_mercado: 3,
          status: true
        },
        {
          id: 218,
          name: "Bermuda",
          description: "Bermuda da categoria Vestuário disponível no mercado Walmart.",
          //categoria: "Vestuário",
          price: 165.39,
          id_categoria: 8,
          id_mercado: 3,
          status: true
        },
        {
          id: 220,
          name: "Calça",
          description: "Calça da categoria Vestuário disponível no mercado Tesco.",
          //categoria: "Vestuário",
          price: 132.93,
          id_categoria: 8,
          id_mercado: 4,
          status: true
        },
        {
          id: 221,
          name: "Camiseta",
          description: "Camiseta da categoria Vestuário disponível no mercado Tesco.",
          //categoria: "Vestuário",
          price: 475.22,
          id_categoria: 8,
          id_mercado: 4,
          status: true
        },
        {
          id: 222,
          name: "Jaqueta",
          description: "Jaqueta da categoria Vestuário disponível no mercado Tesco.",
          //categoria: "Vestuário",
          price: 409.91,
          id_categoria: 8,
          id_mercado: 4,
          status: true
        },
        {
          id: 223,
          name: "Chapéu",
          description: "Chapéu da categoria Vestuário disponível no mercado Assaí Atacadista.",
          //categoria: "Vestuário",
          price: 180.0,
          id_categoria: 8,
          id_mercado: 5,
          status: true
        },
        {
          id: 224,
          name: "Bermuda",
          description: "Bermuda da categoria Vestuário disponível no mercado Assaí Atacadista.",
          //categoria: "Vestuário",
          price: 449.15,
          id_categoria: 8,
          id_mercado: 5,
          status: true
        },
        {
          id: 226,
          name: "Chapéu",
          description: "Chapéu da categoria Vestuário disponível no mercado Cencosud Brasil.",
          //categoria: "Vestuário",
          price: 495.26,
          id_categoria: 8,
          id_mercado: 6,
          status: true
        },
        {
          id: 228,
          name: "Jaqueta",
          description: "Jaqueta da categoria Vestuário disponível no mercado Cencosud Brasil.",
          //categoria: "Vestuário",
          price: 395.89,
          id_categoria: 8,
          id_mercado: 6,
          status: true
        },
        {
          id: 241,
          name: "Mesa",
          description: "Mesa da categoria Escritório disponível no mercado Caita",
          //categoria: "Escritório",
          price: 368.58,
          id_categoria: 9,
          id_mercado: 1,
          status: true
        },
        {
          id: 242,
          name: "Lápis",
          description: "Lápis da categoria Escritório disponível no mercado Caita",
          //categoria: "Escritório",
          price: 366.07,
          id_categoria: 9,
          id_mercado: 1,
          status: true
        },
        {
          id: 244,
          name: "Cadeira",
          description: "Cadeira da categoria Escritório disponível no mercado Grepar",
          //categoria: "Escritório",
          price: 198.11,
          id_categoria: 9,
          id_mercado: 2,
          status: true
        },
        {
          id: 246,
          name: "Lápis",
          description: "Lápis da categoria Escritório disponível no mercado Grepar",
          //categoria: "Escritório",
          price: 6.92,
          id_categoria: 9,
          id_mercado: 2,
          status: true
        },
        {
          id: 247,
          name: "Mesa",
          description: "Mesa da categoria Escritório disponível no mercado Walmart.",
          //categoria: "Escritório",
          price: 291.92,
          id_categoria: 9,
          id_mercado: 3,
          status: true
        },
        {
          id: 248,
          name: "Cadeira",
          description: "Cadeira da categoria Escritório disponível no mercado Walmart.",
          //categoria: "Escritório",
          price: 261.25,
          id_categoria: 9,
          id_mercado: 3,
          status: true
        },
        {
          id: 250,
          name: "Papel Sulfite",
          description: "Papel Sulfite da categoria Escritório disponível no mercado Tesco.",
          //categoria: "Escritório",
          price: 118.91,
          id_categoria: 9,
          id_mercado: 4,
          status: true
        },
        {
          id: 251,
          name: "Cadeira",
          description: "Cadeira da categoria Escritório disponível no mercado Tesco.",
          //categoria: "Escritório",
          price: 346.3,
          id_categoria: 9,
          id_mercado: 4,
          status: true
        },
        {
          id: 253,
          name: "Mesa",
          description: "Mesa da categoria Escritório disponível no mercado Assaí Atacadista.",
          //categoria: "Escritório",
          price: 436.39,
          id_categoria: 9,
          id_mercado: 5,
          status: true
        },
        {
          id: 254,
          name: "Calculadora",
          description: "Calculadora da categoria Escritório disponível no mercado Assaí Atacadista.",
          //categoria: "Escritório",
          price: 455.81,
          id_categoria: 9,
          id_mercado: 5,
          status: true
        },
        {
          id: 255,
          name: "Cadeira",
          description: "Cadeira da categoria Escritório disponível no mercado Assaí Atacadista.",
          //categoria: "Escritório",
          price: 428.92,
          id_categoria: 9,
          id_mercado: 5,
          status: true
        },
        {
          id: 256,
          name: "Lápis",
          description: "Lápis da categoria Escritório disponível no mercado Cencosud Brasil.",
          //categoria: "Escritório",
          price: 470.98,
          id_categoria: 9,
          id_mercado: 6,
          status: true
        },
        {
          id: 257,
          name: "Mesa",
          description: "Mesa da categoria Escritório disponível no mercado Cencosud Brasil.",
          //categoria: "Escritório",
          price: 86.0,
          id_categoria: 9,
          id_mercado: 6,
          status: true
        },
        {
          id: 258,
          name: "Papel Sulfite",
          description: "Papel Sulfite da categoria Escritório disponível no mercado Cencosud Brasil.",
          //categoria: "Escritório",
          price: 128.48,
          id_categoria: 9,
          id_mercado: 6,
          status: true
        },
        {
          id: 271,
          name: "Jogo de Tabuleiro",
          description: "Jogo de Tabuleiro da categoria Brinquedos disponível no mercado Caita",
          //categoria: "Brinquedos",
          price: 121.02,
          id_categoria: 10,
          id_mercado: 1,
          status: true
        },
        {
          id: 272,
          name: "LEGO",
          description: "LEGO da categoria Brinquedos disponível no mercado Caita",
          //categoria: "Brinquedos",
          price: 288.6,
          id_categoria: 10,
          id_mercado: 1,
          status: true
        },
        {
          id: 273,
          name: "Quebra-Cabeça",
          description: "Quebra-Cabeça da categoria Brinquedos disponível no mercado Caita",
          //categoria: "Brinquedos",
          price: 232.49,
          id_categoria: 10,
          id_mercado: 1,
          status: true
        },
        {
          id: 274,
          name: "LEGO",
          description: "LEGO da categoria Brinquedos disponível no mercado Grepar",
          //categoria: "Brinquedos",
          price: 146.06,
          id_categoria: 10,
          id_mercado: 2,
          status: true
        },
        {
          id: 275,
          name: "Boneca",
          description: "Boneca da categoria Brinquedos disponível no mercado Grepar",
          //categoria: "Brinquedos",
          price: 201.67,
          id_categoria: 10,
          id_mercado: 2,
          status: true
        },
        {
          id: 276,
          name: "Carrinho",
          description: "Carrinho da categoria Brinquedos disponível no mercado Grepar",
          //categoria: "Brinquedos",
          price: 311.99,
          id_categoria: 10,
          id_mercado: 2,
          status: true
        },
        {
          id: 277,
          name: "Jogo de Tabuleiro",
          description: "Jogo de Tabuleiro da categoria Brinquedos disponível no mercado Walmart.",
          //categoria: "Brinquedos",
          price: 54.36,
          id_categoria: 10,
          id_mercado: 3,
          status: true
        },
        {
          id: 278,
          name: "Carrinho",
          description: "Carrinho da categoria Brinquedos disponível no mercado Walmart.",
          //categoria: "Brinquedos",
          price: 226.62,
          id_categoria: 10,
          id_mercado: 3,
          status: true
        },
        {
          id: 279,
          name: "Boneca",
          description: "Boneca da categoria Brinquedos disponível no mercado Walmart.",
          //categoria: "Brinquedos",
          price: 78.3,
          id_categoria: 10,
          id_mercado: 3,
          status: true
        },
        {
          id: 280,
          name: "Jogo de Tabuleiro",
          description: "Jogo de Tabuleiro da categoria Brinquedos disponível no mercado Tesco.",
          //categoria: "Brinquedos",
          price: 461.1,
          id_categoria: 10,
          id_mercado: 4,
          status: true
        },
        {
          id: 281,
          name: "Quebra-Cabeça",
          description: "Quebra-Cabeça da categoria Brinquedos disponível no mercado Tesco.",
          //categoria: "Brinquedos",
          price: 98.93,
          id_categoria: 10,
          id_mercado: 4,
          status: true
        },
        {
          id: 283,
          name: "Jogo de Tabuleiro",
          description: "Jogo de Tabuleiro da categoria Brinquedos disponível no mercado Assaí Atacadista.",
          //categoria: "Brinquedos",
          price: 189.64,
          id_categoria: 10,
          id_mercado: 5,
          status: true
        },
        {
          id: 284,
          name: "Boneca",
          description: "Boneca da categoria Brinquedos disponível no mercado Assaí Atacadista.",
          //categoria: "Brinquedos",
          price: 104.66,
          id_categoria: 10,
          id_mercado: 5,
          status: true
        },
        {
          id: 285,
          name: "Carrinho",
          description: "Carrinho da categoria Brinquedos disponível no mercado Assaí Atacadista.",
          //categoria: "Brinquedos",
          price: 342.57,
          id_categoria: 10,
          id_mercado: 5,
          status: true
        },
        {
          id: 286,
          name: "LEGO",
          description: "LEGO da categoria Brinquedos disponível no mercado Cencosud Brasil.",
          //categoria: "Brinquedos",
          price: 161.96,
          id_categoria: 10,
          id_mercado: 6,
          status: true
        },
        {
          id: 287,
          name: "Boneca",
          description: "Boneca da categoria Brinquedos disponível no mercado Cencosud Brasil.",
          //categoria: "Brinquedos",
          price: 55.12,
          id_categoria: 10,
          id_mercado: 6,
          status: true
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("produto", null, {});
  },
};
