const express=require("express")
const cors=require("cors")
const app=express()
const path=require("path")
const bodyParser=require("body-parser")
const PORT=80
const db=require('./db')
const router=require("./routes")


//database connection
db.connect()

//middlware
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))

//cors
//  app.use(cors({
//     origin:"http://localhost:3000",
//  }))

app.use(cors())
app.use((req,res,next)=>{
req.header("Access-Control-Allow-Origin","*")
req.header("Access-Control-Allow-Headers","*")
// req.header(`Access-Control-Allow-Methods: POST,GET,PUT`)
next()
})


//routs
app.use('/api',router)



app.use('/uploads',express.static(path.join(__dirname,"/../uploads")))
app.use(express.static(path.join(__dirname,"/../frondend/build")))


app.get("*",(req,res)=>{
try{
   res.sendFile(path.join(`${__dirname}/../frondend/build/index.html`) )



}catch(e){
res.send("Oops!Unexpected error")
}

})



app.listen(process.env.PORT || 80,()=>{
    console.log(`port listen no ${PORT}`)
})