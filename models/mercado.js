'use strict';
const {
    Model
} = require('sequelize');

const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
    class Mercado extends Model {
        static associate(models) {
            Mercado.hasMany(models.Produto, { foreignKey: 'id_mercado', as: 'produtos' });
        }
    }
    Mercado.init({
        name: DataTypes.STRING,
        //classification: DataTypes.ENUM(["RECOMENDADO", "PARCIAL", "GERAL"]),
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
        sequelize,
        modelName: 'Mercado',
        tableName: 'mercado'
    });
    return Mercado;
};