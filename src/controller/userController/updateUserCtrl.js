const { User } = require('../../db')

const updateUserCtrl = async (name, email, id) => {
    // if (![]) throw new Error('Provando fallo en update')
    // return ('this is the controller to updateGame')
    
    const aux = await User.findByPk(id)
    aux.name = name
    aux.email=email
    await aux.save() //para guardar en la db


    // ----------------------------CAMBIARIA TODO LOS name a "Hacker" donde diga Ggoku
    // await User.update({name:"Hacker"},{
    //     where:{
    //         name:"Goku"
    //     }
    // });


    return aux

}

module.exports = updateUserCtrl;