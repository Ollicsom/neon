/* eslint-disable linebreak-style */
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Membre extends Model {
        static associate(models) {
            models.Membre.belongsTo(models.Pole, { foreignKey: 'PoleId', sourceKey: 'id', });
        }
    }
    Membre.init({
        lastname: DataTypes.STRING,
        firstname: DataTypes.STRING,
        description: DataTypes.STRING,
        eggURL: DataTypes.STRING,
        photoURL: DataTypes.STRING,
        PoleId: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true,
        sequelize,
        modelName: 'Membre',
        tableName: 'membre',
    });
    return Membre;
};