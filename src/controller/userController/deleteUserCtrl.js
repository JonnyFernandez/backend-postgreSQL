const {User}=require('../../db')

const deleteUserCtrl = async (id) => {
     console.log(id);
    const deleteID = await User.destroy({ where: {id} })
    if(deleteID){
        return `Se elimino el userID ${id}`

    }else{
        return `No se elimino el userID ${id}, o no esta en la << DB >>`
    }
    
    

    // return aux

}

module.exports = deleteUserCtrl;