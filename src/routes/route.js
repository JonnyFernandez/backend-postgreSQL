const { Router } = require('express')
const user = require('./gamerRoute')
const pageRoute = require('./pageRoute')


const route = Router()


route.use('/user', user)

//ejemplo de relacion mucho a mucho
route.use('/page', pageRoute)





module.exports = route;