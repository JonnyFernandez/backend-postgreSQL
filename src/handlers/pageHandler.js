// const { Page } = require('../db')
const createPage = require('../controller/pageController/createPage')





//NOTA, EN EL BOBY ES DONDE INGRESO LOS USUARIOS QUE GUSTAN DE ESTA PAGINA "userS":[1,2,3] 

const pagePost = async (req, res) => {
    const { title, users } = req.body;

    try {
        const aux = await createPage(title, users)


        res.status(201).json(aux)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}


module.exports = pagePost;