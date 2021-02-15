import sequelize from '../utils/dbConnection';
const { DataTypes, Model } = require('sequelize');


class Movies extends Model {}

Movies.init({
    id: { type: DataTypes.NUMBER, primaryKey: true },
    title: { type: DataTypes.STRING, },
    description: { type: DataTypes.STRING },
    duration: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    cover_url: { type: DataTypes.STRING },
    movie_url: { type: DataTypes.STRING },
    }, {
    sequelize,
    modelName: 'Movies',
    timestamps: true,
});

export default Movies;