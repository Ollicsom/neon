/* eslint-disable linebreak-style */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Defi extends Model {
        static associate() {
        }
    }
    Defi.init({
        url: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: 'Defi',
        tableName: 'defi',
    });
    return Defi;
};