'use strict';
const {
    Model
} = require('sequelize');

const moment = require('moment');
const { type } = require('os');
module.exports = (sequelize, DataTypes) => {
    class Produto extends Model {
        static associate(models) {
            Produto.belongsTo(models.Categoria, { foreignKey: 'id_categoria', as: 'categoria' });
            Produto.belongsTo(models.Mercado, { foreignKey: 'id_mercado', as: 'mercado' });
        }
    }
    Produto.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: {
            type: DataTypes.DOUBLE,
            get() {
                const price = this.getDataValue('price');
                return price?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').replace('.', ',');
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        id_categoria: DataTypes.INTEGER,
        id_mercado: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Produto',
        tableName: 'produto',
        timestamps: false
    });
    return Produto;
};