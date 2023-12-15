const { Router } = require('express')
const pagePost = require('../handlers/pageHandler')


const pageRoute = Router()

pageRoute.post('/', pagePost )







module.exports = pageRoute;