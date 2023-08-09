const express=require("express")
const router=express.Router()


const questionDB=require("../models/Question")

router.post('/',async(req,res)=>{
    try{

await questionDB.create({
    questionName:req.body.questionName,
    questionUrl:req.body.questionUrl,
 User:req.body.User
}).then(()=>{
    res.status(201).send({
        status:true,
        message:"questionr added successfully"
    })
    }).catch((e)=>{
        res.status(400).send({
            status:false,
            message:"bad request"
        })
})
    }catch(e){
res.status(500).send({
    status:false,
    message:"erroe while adding question"
})
    }
})

router.get('/',async(req,res)=>{
try{
await questionDB.aggregate([
    {

$lookup:{
    from:"answers", //collection join
    localField:"_id",
    foreignField:"questionId",
    as:"allAnswer" //output arry field
}

}


]).exec().then((doc)=>{
    res.status(200).send(doc)
}).catch(()=>{
    res.status(500).send({
        status:false,
        message:"unable to get the question detail"
    })
})

}catch(e){
res.status(500).send({
    status:false,
    message:"unexpected error"
})
}


   
})



module.exports=router;