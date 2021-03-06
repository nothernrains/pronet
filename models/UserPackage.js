import sequelize from '../utils/dbConnection';

import { DataTypes, Model } from 'sequelize';


class UserPackages extends Model {}

UserPackages.init({
    id: { type: DataTypes.NUMBER, primaryKey: true, },
    user_id: { type: DataTypes.NUMBER, },
    package_id: { type: DataTypes.NUMBER, },
    }, {
    sequelize,
    modelName: 'user_packages',
    timestamps: false,
});

export default UserPackages;