import sequelize from '../utils/dbConnection';

import { DataTypes, Model } from 'sequelize';


class UserPaymentInfos extends Model {}

UserPaymentInfos.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    user_id: { type: DataTypes.NUMBER, },
    card_number: { type: DataTypes.STRING, },
    card_holder: { type: DataTypes.STRING, },
    card_expiry_month: { type: DataTypes.STRING, },
    card_expiry_year: { type: DataTypes.STRING, },
    card_cvv: { type: DataTypes.STRING, },
    }, {
    sequelize,
    modelName: 'user_payment_infos',
    timestamps: false,
});

export default UserPaymentInfos;