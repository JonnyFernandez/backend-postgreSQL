const { Page } = require('../../db')


const createPage = async (title, users) => {

    const newPage = await Page.create({ title })

    await newPage.addUsers(users)

    return newPage

}

module.exports = createPage;