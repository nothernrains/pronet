// UserPaymentInfos

import sequelize from '../utils/dbConnection';

import { DataTypes, Model } from 'sequelize';


class UserPayments extends Model {}

UserPayments.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    user_id: { type: DataTypes.NUMBER, },
    month: { type: DataTypes.STRING, },
    }, {
    sequelize,
    modelName: 'user_payments',
    timestamps: false,
});

export default UserPayments;