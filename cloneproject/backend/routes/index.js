const express=require("express")
const router=express.Router()

const questionRouter=require("./Question")
const answernRouter=require("./Answer")

router.get("/",(req,res)=>{
    res.send("This api is reserved for Qura clone")
})

router.use('/questions',questionRouter)
router.use('/answers',answernRouter)


module.exports=router