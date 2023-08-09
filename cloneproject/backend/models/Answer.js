const mongoose=require('mongoose')

const AnswerSchema=new mongoose.Schema({
answer:String,
questionId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Question"
},


CreatedAt:{
   type:Date,
   default:Date.now()
},
User:Object,

})

module.exports=mongoose.model("Answers",AnswerSchema)