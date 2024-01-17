/* eslint-disable linebreak-style */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pole extends Model {
        static associate(models) {
            models.Pole.hasMany(models.Membre, { foreignKey: 'PoleId', sourceKey: 'id' });
        }
    }
    Pole.init({
        logoURL: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        freezeTableName: true,
        sequelize,
        modelName: 'Pole',
        tableName: 'pole',
    });
    return Pole;
};