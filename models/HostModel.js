const mongoose=require('mongoose')

const HostSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:String,
    Specialty:String,
})
module.exports=mongoose.model('Host',HostSchema)