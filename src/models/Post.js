const { DataTypes } = require('sequelize')
module.exports = (database) => {
    database.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            // type: DataTypes.FLOAT, // numeros con decimales 777.9
            type: DataTypes.STRING,
            allowNull: false
        }

    });
}