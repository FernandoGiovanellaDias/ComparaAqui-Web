'use strict';
const {
    Model
} = require('sequelize');

const moment = require('moment');
const os = require('os');

const PORT = process.env.PORT;

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
                    return `${getLocalIPAddress()}/uploads/${icon}`;
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



const getLocalIPAddress = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName]) {
            // Filter for IPv4 and internal addresses
            if (iface.family === 'IPv4' && !iface.internal) {
                return `http://${iface.address}:${PORT}`;
            }
        }
    }
    return `http://localhost:${PORT}`;
};