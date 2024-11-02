"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categoria",
      [
        {
          id: 1,
          title: "Limpeza",
          icon: null,
          status: true
        },
        {
          id: 2,
          title: "Eletrônicos",
          icon: null,
          status: true
        },
        {
          id: 3,
          title: "Jardinagem",
          icon: null,
          status: true
        },
        {
          id: 4,
          title: "Frutas",
          icon: null,
          status: true
        },
        {
          id: 5,
          title: "Vegetais",
          icon: null,
          status: true
        },
        {
          id: 6,
          title: "Para Microondas",
          icon: null,
          status: true
        },
        {
          id: 7,
          title: "Higiêne",
          icon: null,
          status: true
        },
        {
          id: 8,
          title: "Vestuário",
          icon: null,
          status: true
        },
        {
          id: 9,
          title: "Escritório",
          icon: null,
          status: true
        },
        {
          id: 10,
          title: "Brinquedos",
          icon: null,
          status: true
        }
        /* base maior
        {
          id: 1,
          title: "Beleza e Higiene",
          icon: null,
          status: true
        },
        {
          id: 2,
          title: "Cozinha, Jardim e Animais",
          icon: null,
          status: true
        },
        {
          id: 3,
          title: "Limpeza e Utensílios Domésticos",
          icon: null,
          status: true
        },
        {
          id: 4,
          title: "Padaria, Bolos e Laticínios",
          icon: null,
          status: true
        },
        {
          id: 5,
          title: "Lanches e Alimentos de Marca",
          icon: null,
          status: true
        },
        {
          id: 6,
          title: "Grãos, Óleo e Temperos",
          icon: null,
          status: true
        },
        {
          id: 7,
          title: "Frutas e Vegetais",
          icon: null,
          status: true
        },
        {
          id: 8,
          title: "Carnes, Peixes e Ovos",
          icon: null,
          status: true
        },
        {
          id: 9,
          title: "Bebidas",
          icon: null,
          status: true
        },
        {
          id: 10,
          title: "Gourmet e Comida Internacional",
          icon: null,
          status: true
        }
          */
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categoria", null, {});
  },
};
