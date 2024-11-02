"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "mercado",
      [
        {
          id: 1,
          name: "Caita - Bento Gonçalves - Centro",
          status: true
        },
        {
          id: 2,
          name: "Grepar - Bento Gonçalves - São Roque",
          status: true
        },
        {
          id: 3,
          name: "Walmart",
          status: true
        },
        {
          id: 4,
          name: "Tesco",
          status: true
        },
        {
          id: 5,
          name: "Assaí Atacadista",
          status: true
        },
        {
          id: 6,
          name: "Cencosud Brasil",
          status: true
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("mercado", null, {});
  },
};
