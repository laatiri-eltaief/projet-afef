const Host=require('../models/HostModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const config=require('config')
const {validationResult}=require('express-validator')
const register=async(req,res)=>{
    try{
        const errors=validationResult(req)
        if (!errors.isEmpty) return res.status(400).json({errors:errors.mapped()})
const {firstName,lastName,age,Specialty}=req.body
console.log(req.body)

const Host = await Host.findOne({Specialty})
console.log(Host)
if (Host) return res.status(400).json({errors:[{msg:'user already exist!!!'}]})
const newHost= new Host({firstName,lastName,age,Specialty})
const registerUser=await newHost.save()
//const token=jwt.sign({payload},secret-key)
const payload={sub:registerUser._id}
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
const {Specialty}=req.body
const Host=await Host.findOne({Specialty})
if (!Host) return res.status(400).json({errors:[{msg:'please register before'}]})
const isMatch=await bcrypt.compare(Specialty,Host.Specialty)
if (!isMatch) return res.status(400).json({errors:[{msg:'wrong Specialty'}]})
const payload={sub:Host._id}
const token=await jwt.sign(payload,'MYAPP')
res.json({token})
}
    
    catch(err){
        res.status(500).json({errors:[{msg:err.message}]})
    }
}
module.exports={register,login}
