const { User, Page } = require('../../db')
const { Op } = require('sequelize')



const getByName = async (name) => {

    // const allUser = await User.findAll({ where: { name } })
    // const allUser = await User.findAll({attributes:{exclude:["bas"]}})
    // const allUser = await User.findAll({attributes:["atr1", "atr2"]})
    // return allUser
    // ------------------------------------
    // para que find user busque por nombre y no distinga de mayusculas y que traiga lo que sea
    const results = await User.findAll({
        where: {
    //esta manera hace magia opmite los apperCase y lowCase
            name: { [Op.iLike]: `%${name}%` } 
        }
    })

    return results
    // ------------------------------------------------------------------


}



const allUserCtrl = async () => {
    //aca modifico para agregarle las paginas que sigen a cada user
    const aux = await User.findAll({
        include: { model: Page,
                   attributes: ['title'], // para que me traiga solo el title
                   through:{   //PARA QUE NO TRAIGA LA RELACION DE LA TABLA INTERMEDIA
                    attributes:[]
                   } }
    })

    if (aux.length < 1) {
        return "empty database"

    } else {
        return aux
    }




}


const userbyId = async (id) => {
    const aux = await User.findByPk(id)

    if (!aux) throw new Error('Id not found')

    return aux;
}





module.exports = { allUserCtrl, getByName, userbyId }