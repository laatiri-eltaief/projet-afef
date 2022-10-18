const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const userController=require('../controllers/UserController')
const {validationcheck}=require('../middlwares/Datascheckmiddlware')
router.post('/register',validationcheck,userController.register)


module.exports=router