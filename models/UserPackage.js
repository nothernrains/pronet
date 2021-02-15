import sequelize from '../utils/dbConnection';

const { Sequelize, DataTypes, Model } = require('sequelize');


class UserPackage extends Model {}

UserPackage.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    name: { type: DataTypes.STRING, },
    }, {
    sequelize,
    modelName: 'UserPackage',
    timestamps: true,
});

export default UserPackage;