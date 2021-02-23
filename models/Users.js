import sequelize from '../utils/dbConnection';

const { DataTypes, Model } = require('sequelize');


class Users extends Model {}

Users.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    name: { type: DataTypes.STRING, },
    surname: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    userRole: { type: DataTypes.NUMBER },
    // createAt: { type: DataTypes.DATE },
    }, {
    sequelize,
    modelName: 'Users',
    timestamps: true,
});


export default Users;