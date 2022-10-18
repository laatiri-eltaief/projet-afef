const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    // role:{
    //     type:String,
    //     enum:['user','admin'],
    //     default:'user'
    // }
date :String,
adress:String,
gender:String,
telephone :Number,
})
module.exports=mongoose.model('user',UserSchema)