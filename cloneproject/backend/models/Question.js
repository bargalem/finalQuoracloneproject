const mongoose=require('mongoose')

const QuestionSchema=new mongoose.Schema({
questionName:String,
questionUrl:String,
CreatedAt:{
   type:Date,
   default:Date.now()
},
answers:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Answers"
},
User:Object,
})

module.exports=mongoose.model("Question",QuestionSchema)