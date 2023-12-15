const { allUserCtrl, getByName, userbyId } = require('../controller/userController/allUserCtrl')
const postUserCtrl = require('../controller/userController/postUserCtrl')
const updateUserCtrl = require('../controller/userController/updateUserCtrl')
const deleteUserCtrl = require('../controller/userController/deleteUserCtrl');



const allUsers = async (req, res) => {
    const { name } = req.query;
    // if (![name].every(Boolean)) return res.status(404).send('Flata enviardatos obligatorios')

    // -------------ESTO CODIGO SIRBE PARA FILTRAR-------------------------
    // --------------------------------------------------------------------

    // const { name, genre } = req.query;
    // const statement = {}

    // if(req.query.name || req.query.genre){
    //     if (req.query.name) { statement["where"] = { name } }; 
    //     if (req.query.name) { statement["where"] = { ...statement["where"], genre } }; 
    // }
    // else if (Object.keys(req.query).length) {
    //     statement["attributes"] = Object.keys(req.query);
    // }




    // --------------------------------------------------------------------
    // ---------------PRACTICAR EL CODIGO DE ARRIBA---------


    try {
        const source = name ? await getByName(name) : await allUserCtrl()

        res.status(200).json(source)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};


const getById = async (req, res) => {
    const { id } = req.params;


    try {
        const sourceId = id ? await userbyId(id) : await allUserCtrl()
        res.status(200).json(sourceId)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const postUser = async (req, res) => {
    const { name, email, phone, gender } = req.body;
    try {
        let aux = await postUserCtrl(name, email, gender, phone)
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    console.log(id, name, email);
    try {
        let update = await updateUserCtrl(name, email, id)
        res.status(200).json(update)


    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {

        let deleteGame = await deleteUserCtrl(id)

        res.status(200).json(deleteGame)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }
}

// // -------------ESTO CODIGO SIRBE PARA FILTRAR A MENORES DE 25-------------------------
// // --------------------------------------------------------------------

// const young = async (req, res) => {
//     //devolver pesonajes con age<25 
//     try {
//         const youngs = await Character.findAll({ where: { age: { [Op.lt]: 25 } } })
//         res.status(200).json(young)
//     } catch (error) {
//         res.status(400).json({ error: error.message })

//     }

// }
// // --------------------------------------------------------------------
// // ---------------PRACTICAR EL CODIGO DE ARRIBA---------





// // -------------ESTO CODIGO SIRBE HACER UN UPDATE-------------------------
// // -----------------------------------------------------------------------

// const update = async (req, res) => {
//     const {attributes} = req.params;
//     const {value} = req.query;


//     await Character.update({ [attributes]: value },{
//         where: {
//             [attributes]: null,
//         }
//     })
// }

// res.send('personaje actualizado')

// // --------------------------------------------------------------------
// // --------------------------------------------------------------------





// -------------ESTO CODIGO SIRBE HACER GETTER-------------------------
// -------------devuelve un algo y le concatena algo-------------------
/*
 * para hacer este codigo tengo que dirigirme a al modelo que quiera trabajar
 * en el atributo que quiro tengo que agregar:
 * eje:
  age:{  
  type: DataTypes.INTEGER, 
  get(){
  const raw = this.getDataValue("age");
  return raw? `${raw} hola juan carlos`
  }
 */
// --------------------------------------------------------------------
// --------------------------------------------------------------------



// -------------ESTO CODIGO SIRBE HACER GETTER-------------------------
// -------------CAMPO VIRTUAL QUE NO SERAA INCLUIDO EN LA DATABASE-----
/**
 
samuray:{
    type: DataTypes.VIRTUAL,
    get(){
        const name = this.getDataValue("name");
        const mana_cost = Math.floor(this.getDataValue("mana_cost"))
        const description = this.getDataValue("description")
        return `${name}(${mana_cost} point of mana) - Description: ${description}  `
    }
}
*/
// --------------------------------------------------------------------
// --------------------------------------------------------------------



// -------------------VALIDATION---------------------------------------
// ------------------MAX y MIN-----------------------------------------
// EN ABILITY-> mana_cost-> el valor debe estar entre 10.0 y 250.0

// EN EL ATRIBUTO DEL MODEMO PONGO EL VALIDATE
/**
 
mana_cost:{
    type:DataTypes.FLOAT,
    validate:{
        min:10.0,
        max:250.0
    }
}

*/
// --------------------------------------------------------------------




// -------------------VALIDATION---------------------------------------
// --name NO--no Henry-----no Soy Henry------no SoyHenry-----------------

/*
namet:{
    type:DataTypes.STRING,
    validate:{
        notIn:["Henry", "SoyHenry", "Soy Henry"]
    }
}





*/























module.exports = { allUsers, postUser, updateUser, deleteUser, getById }














