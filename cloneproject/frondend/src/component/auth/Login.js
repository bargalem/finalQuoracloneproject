import React from 'react'
 import "./Login.css"
 import logoimg from "../../images/logoimg.jfif"
 import {signInWithPopup} from "firebase/auth"
 import {auth,provider} from "../../Firebase.js"
 


export default function Login() {
  
const handleSubmit=async()=>{
  signInWithPopup(auth,provider).then((result)=>{
console.log(result)
  }).catch((e)=>{
    console.log(e)
  })
}


  return (
    <div className='login-container'>

<div className='login-content'>
<img src={logoimg} alt=" logo" ></img>
<button  onClick={handleSubmit} className="btn-login">Login to continue</button>
      
</div>

    </div>
  )
}
