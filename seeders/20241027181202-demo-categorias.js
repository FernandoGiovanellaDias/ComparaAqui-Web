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
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categoria", null, {});
  },
};
