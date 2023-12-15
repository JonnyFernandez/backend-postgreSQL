const {User} = require('../../db')

const postUserCtrl = async (name, email, gender, phone) => {
    
   const newUser = await User.create({name, email, gender, phone})

    return   newUser;  
}

module.exports = postUserCtrl;