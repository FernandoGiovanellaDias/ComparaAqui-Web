'use strict';
const {
    Model
} = require('sequelize');

const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {
        static associate(models) {
            Categoria.hasMany(models.Produto, { foreignKey: 'id_categoria', as: 'produtos' });
        }
    }
    Categoria.init({
        title: DataTypes.STRING,
        icon: {
            type: DataTypes.STRING,
            get() {
                const icon = this.getDataValue('icon');
                return icon;
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {
        sequelize,
        modelName: 'Categoria',
        tableName: 'categoria',
        timestamps: false
    });
    return Categoria;
};