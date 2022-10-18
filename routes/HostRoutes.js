const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const HostController=require('../controllers/HostController')
const {validationcheck}=require('../middlwares/Datascheckmiddlware')
router.post('/register',validationcheck,userController.register)


module.exports=router