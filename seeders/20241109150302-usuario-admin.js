"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuario",
      [
        {
          email: "admin@admin.com",
          nome: "Administrador",
          senha: "1234",
          token_account: "TOKENTOKENTOKEN1",
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'call execute_generated_queries();'
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
