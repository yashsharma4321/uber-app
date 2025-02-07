const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controller/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min :3}).withMessage('First name must be at lead 3 character long'),
    body('password').isLength({min:3}).withMessage('password must be at least 6 character long')


],
userController.registerUser
)
 
module.exports =router;