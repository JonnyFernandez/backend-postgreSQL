const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')
const pageModels = require('./models/Page')
require('dotenv').config()





const database = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.LOCALHOST}/${process.env.DATABASE}`, { logging: false });

UserModel(database);
PostModel(database);
pageModels(database)

console.log(database.models);

const { User, Post, Page } = database.models
//relacion de uno a varios
User.hasMany(Post)      //tiene varios 
Post.belongsTo(User)    //pertenese a

// --------------------------------------
// relacion de varios a varios
User.belongsToMany(Page, { through: "UserPage" })
Page.belongsToMany(User, { through: "UserPage" })








module.exports = {
    database,
    ...database.models
}