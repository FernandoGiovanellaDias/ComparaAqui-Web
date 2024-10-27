'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('produto', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.DOUBLE
            },
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            id_categoria: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'categoria',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            id_mercado: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'mercado',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('produto');
    }
};
