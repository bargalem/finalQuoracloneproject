import React,{useState} from 'react'
import "./css/Post.css"
import { Avatar  } from '@material-ui/core'
import ArrowUpwardOutlinedicon from "@material-ui/icons/ArrowUpwardOutlined"
import ArrowDownwardOutlinedicon from "@material-ui/icons/ArrowDownwardOutlined"
import ReapetOutlinedicon from "@material-ui/icons/RepeatOneOutlined"
import ChatBubleOutlined from "@material-ui/icons/ChatBubbleOutlined"
import ShareOutlinedicon from "@material-ui/icons/ShareOutlined"
import MoreHorizOutlinedicon from "@material-ui/icons/MoreHorizOutlined"
import {Modal} from "react-responsive-modal"
import CloseIcon  from "@material-ui/icons/Close"
import 'react-responsive-modal/styles.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ReactHtmlParser from "html-react-parser"

import ReactTimeAgo from 'react-time-ago'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/Userslice'

 function LastSeen({ date }) {
  return (
    <div>
       <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}



export default function Post({post}) {
  const[isModalOpen,setisModalOpen]=useState(false)
  const[answer,setanswer]=useState("")


  const Close=(<CloseIcon/>)

  const user=useSelector(selectUser)

const handleQuill=(value)=>{
  setanswer(value)
}
//console.log(answer)

const handelSubmit=async()=>{
  if(post?._id && answer !=="" ){

const config={
headers:{
  "Content-Type":"application/json"
}
}


    const body={
      answer:answer,
      questionId:post?._id,
      User:user
    }


await axios.post("http://localhost:80/api/answers",body,config)
.then((res)=>{
console.log(res.data)
alert("Answer added successfully")
setisModalOpen(false)
window.location.href="/"
}).catch((e)=>{
  console.log(e)
})
  }
}


  return (
    <div className="Post">
      <div className="Post-info">
        <Avatar src={post?.user?.photo}/>
        <h4>{post?.user?.userName}</h4>
        <small><LastSeen  date={post?.CreatedAt}/></small>
      </div>

      <div className="Post-body">
        <div className='Post-question'>
        <p >{post?.questionName}</p>
        <button  onClick={()=>setisModalOpen(true)}className="Post-btnanswer">Answer</button>

<Modal
 open={isModalOpen}
 CloseIcon={Close}
 onClose={() => setisModalOpen(false)}
 closeOnEsc
 center
 closeOnOverlayClick={false}
 styles={{
   overlay: {
     height: "auto",
   },
 }}
>
<div className='modal-question'>
<h1>{post?.questionName}</h1>
<p>Asked by { " "}<span style={{fontStyle:"bold"}} className='name'>{post?.user?.userName}</span> on{ " "} 
<span className='name'>{new Date(post?.CreatedAt).toLocaleString()}</span></p>
</div>


<div className='modal-answer'> 
<ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer'/>
</div>

<div className='modal-button'> 
<button  onClick={() => setisModalOpen(false)}   className='cancle'>Cancle</button>
<button onClick={handelSubmit}   type="submit" className='add'>Add Answer</button>
</div>

</Modal>



        
        </div>

{post.questionUrl !=="" && <img src={post.questionUrl} alt="url"/>}

      </div>

      <div className="Post-footer">
        <div className="Post-footerAction">
          <ArrowUpwardOutlinedicon />
          <ArrowDownwardOutlinedicon />
         
          <ReapetOutlinedicon />
          <ChatBubleOutlined />
          </div>

        <div className="Post-footerLeft">
          <ShareOutlinedicon />
          <MoreHorizOutlinedicon />
        </div>
      </div>

      <p style={{color:"rgba(0,0,0,0.5)",fontSize:"15px",fontWeight:"bold",margin:"10px 0px"}}>
        {post?.allAnswer.length} Answers(s)</p>

      <div className="Post-Answer">
       

{ post?.allAnswer.map((_a)=>(<>

 <div className="Post-Answer-container">
  <div className="Post-Answered">
            <Avatar src={_a?.user?.photo}/>
          
            <div className="Post-info">
              <h4> {_a?.user?.userName}</h4>
              <small><LastSeen date={_a?.CreatedAt}/></small>
              </div>
          </div>
<div className='post-answer'> 
<h4>{ReactHtmlParser(_a?.answer)}</h4>
</div>
</div>

</>))
}
        


        
      </div>






    </div>
  );
}
