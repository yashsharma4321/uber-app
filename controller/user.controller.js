const usermodel = require('../model/user.model');
const usermodel = require('../model/user.model');
const userService = require('../Services/user.service');
const {validationResult} = require('express-validator');
 module.exports.registerUser = async (req,res,next)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {firstname,lastname,email,password} = req.body;
const hashedPassword = await usermodel.hashedPassword(password);
const user = await userService.createUser({
    firstname,
    lastname,
    email,
    password : hashedPassword
});
const token = user.generateAuthtoken();
}