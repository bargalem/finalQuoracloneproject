const  mongoose=require("mongoose")

const url="mongodb://localhost:27017/Qoura-clone-mern"

module.exports.connect=()=>{
mongoose.connect(url,{
    useNewUrlParser:true,
    // useUrlfiedTopology:true
}).then(()=>{
console.log("Mongodb connection successfully")

}).catch((error)=>{
    console.log("error",error)
})

}