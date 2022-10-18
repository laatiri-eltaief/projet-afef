const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const ActivityController=require('../controllers/ActivityController')
const {validationcheck}=require('../middlwares/Datascheckmiddlware')
router.post('/register',validationcheck,userController.register)


module.exports=router