const mongoose=require('mongoose')

const ActivitySchema=mongoose.Schema({
activityName :String,
hostName:String,
activityTime:Number,
photos:String,


   
})
module.exports=mongoose.model('Activity',ActivitySchema)