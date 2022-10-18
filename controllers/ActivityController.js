const Activity=require('../models/ActivityModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const config=require('config')
const {validationResult}=require('express-validator')
const register=async(req,res)=>{
    try{
        const errors=validationResult(req)
        if (!errors.isEmpty) return res.status(400).json({errors:errors.mapped()})
const {activityName,hostName,activityTime,photos}=req.body
console.log(req.body)

const Activity = await Activity.findOne({activityName})
console.log(Activity)
if (Activity) return res.status(400).json({errors:[{msg:'Activity already exist!!!'}]})
const newUser = new User({activityName,hostName,activityTime,photos})
const registerUser=await newActivity.save()
//const token=jwt.sign({payload},secret-key)
const payload={sub:registerActivity._id}
const token=jwt.sign(payload,"MYAPP")

res.json({token})
console.log(token)
    }
    catch(err){
        res.status(500).json({errors:[{msg:err.message}]})
    }
}
const login=async(req,res)=>{
    try{
const {activityName}=req.body
const Activity=await Activity.findOne({activityName})
if (!Activity) return res.status(400).json({errors:[{msg:'please register before'}]})
const isMatch=await bcrypt.compare(activityName,Activity.activityName)
if (!isMatch) return res.status(400).json({errors:[{msg:'wrong Activity'}]})
const payload={sub:Activity._id}
const token=await jwt.sign(payload,'MYAPP')
res.json({token})
}
    
    catch(err){
        res.status(500).json({errors:[{msg:err.message}]})
    }
}
module.exports={register,login}
