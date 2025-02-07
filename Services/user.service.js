const usermodel = require('../model/user.model');
module.exports.createUser = async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !lastname || !email || !password){
        throw new Error('All field are required');
    }
    const user  = usermodel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}