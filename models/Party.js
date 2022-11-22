// import Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Party model
class Party extends Model {
    
}

// Initialize Party model's data and configuration with .init
Party.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define a startdate column
        startdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        // define an ispublic column
        ispublic: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            validate: {
                isIn: [[ true, false]]
            }
        },
        // define an isover18 column
        isover18: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            validate: {
                isIn: [[ true, false]]
            }
        },
        // foreign key reference to User model
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // foreign key reference to Theme model
        theme_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'theme',
                key: 'id'
            },
            onDelete: 'SET NULL'
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'party'
    }
);

module.exports = Party;