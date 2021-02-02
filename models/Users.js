import sequelize from '../utils/dbConnection';

const { Sequelize, DataTypes, Model } = require('sequelize');


class Users extends Model {}

Users.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    name: { type: DataTypes.STRING, },
    surname: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    userRole: { type: DataTypes.NUMBER },
    createAt: { type: DataTypes.DATE },
    }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Users', // We need to choose the model name
    timestamps: true,
});

// the defined model is the class itself
console.log(Users === sequelize.models.Users); // true

export default Users;