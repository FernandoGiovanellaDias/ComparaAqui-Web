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
                if (icon) {
                    const host = global.host || 'localhost:3000'; // Padrão ou global
                    const protocol = global.protocol || 'http';  // Padrão ou global
                    return `${protocol}://${host}/uploads/${icon}`;
                }
                return null;
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