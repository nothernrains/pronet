import sequelize from '../utils/dbConnection';

const { Sequelize, DataTypes, Model } = require('sequelize');


class Packages extends Model {}

Packages.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    name: { type: DataTypes.STRING, },
    }, {
    sequelize,
    modelName: 'Packages',
    timestamps: true,
});

export default Packages;