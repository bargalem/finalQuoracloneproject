import React, { useEffect, useState } from 'react'
import "./css/Feed.css"
import QuoraBox from './QuoraBox'
import Post from './Post'
import axios from "axios"

export default function Feed() {
const[posts,setpost]=useState([])


useEffect(()=>{
axios.get("http://localhost:80/api/questions").then((res)=>{
  console.log(res.data.reverse())
  setpost(res.data)

}).catch((e)=>{
  console.log(e)
})
},[])


  return (
    <div className='Feed'>
<QuoraBox/>

{
  posts.map((post,index)=>(<Post key={index}  post={post}/>))
}

    </div>
  )
}
