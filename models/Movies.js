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
    sequelize, // We need to pass the connection instance
    modelName: 'Movies', // We need to choose the model name
    timestamps: true,
});

// the defined model is the class itself
console.log(Movies === sequelize.models.Movies); // true

export default Movies;