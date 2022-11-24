// import Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Party model
class Theme extends Model {}

// Initialize Theme model's data and configuration with .init
Theme.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define a theme_description column
        theme_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['costume party', 'birthday party', 'sports event', 'cocktail party', 'dinner party']]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'theme'
    }
);

module.exports = Theme;