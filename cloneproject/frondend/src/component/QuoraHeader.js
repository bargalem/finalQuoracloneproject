import React, { useState } from 'react'
import "./css/QuoraHeader.css"
import logoimg from "../images/logoimg.jfif"
import HomeIcon from "@material-ui/icons/Home"
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined"
import AssingmentTurnedInOutlined from "@material-ui/icons/AssignmentTurnedInOutlined"
import PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined"
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined"
import Search from "@material-ui/icons/Search"
import { Avatar, Button, Input } from '@material-ui/core'
import {Modal} from "react-responsive-modal"
import CloseIcon  from "@material-ui/icons/Close"
import 'react-responsive-modal/styles.css'
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined"
import ExpandMoreicon from "@material-ui/icons/ExpandMore"
import axios from "axios"
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { useDispatch, useSelector } from 'react-redux'
import {logout, selectUser} from '../feature/Userslice';




export default function QuoraHeader() {
 const[isModalOpen,setisModalOpen]=useState(false)
const[inputurl,setinputurl]=useState("")
const[question,setquestion]=useState("")
const dispatch=useDispatch()

const user=useSelector(selectUser)

const Close=(<CloseIcon/>)

const handalSubmit=async()=>{

if (question !== "") {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    questionName: question,
    questionUrl: inputurl,
    User:user
  };

  await axios
    // .post("http://localhost:80/api/questions", body, config)

    .post("http://localhost:80/api/questions", body, config)

    .then((res) => {
      console.log(res.data);
      alert(res.data.message);
  window.location.href="/";
    })
    .catch((e) => {
      console.log(e);
alert("error in adding question")

    });
}

};

 const handleLogout=()=>{
if(window.confirm('Are u sure to Logout')){
 signOut(auth).then(()=>{
    // dispatch(logout())
   dispatch(logout())
    console.log("Loged out")
  }).catch(()=>{
    console.log(" error Loged out")
  })
}

  
 }




  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader-logo">
          <img src={logoimg} alt="logo"></img>
        </div>
        <div className="qHeader-icons">
          <div className="qHeader-icon">
            <HomeIcon />
          </div>
          <div className="qHeader-icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader-icon">
            <AssingmentTurnedInOutlined />
          </div>
          <div className="qHeader-icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader-icon">
            <NotificationsOutlined />
          </div>
        </div>

        <div className="qHeader-input">
          <Search />
          <input type="text" placeholder="search Question"></input>
        </div>

        <div className="qHeader-Rem">
          <div className="qHeader-Rem-avatar">
<span onClick={handleLogout}   ><Avatar src={user?.photo}/></span>

            
          </div>
          <Button onClick={() => setisModalOpen(true)}>Add Question</Button>

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
            <div className="modal-Title">
              <h5> Add Question</h5>
              <h5> Share Link</h5>
            </div>

            <div className="modal-info">
              <Avatar  src={user?.photo} className="avtar" />
              <div className="modal-scop">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMoreicon />
              </div>
            </div>




            <div className="madal-filed">
              <Input
              value={question}
              onChange={(e)=>setquestion(e.target.value)}
                type="text"
                placeholder="Start your question with 'What','how','Why','etc'."
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >

                <div className='madal-fildlink'>
                <input
                 value={inputurl}
                 onChange={(e)=>setinputurl(e.target.value)}

                  type="text"
                  placeholder="Optional include link that gives context"


                />
              </div>

              </div>
              {inputurl !==""&&<img style={{
               height:"40vh",objectFit:"contain"


              }}src={inputurl} alt="displayimg"></img>}

            </div>

<div className='modal-button'> 
<button  onClick={() => setisModalOpen(false)}   className='cancle'>Cancle</button>
<button 
onClick={handalSubmit}

type="submit" 
className='add'>
  Add Question</button>


</div>




          </Modal>
        </div>
      </div>
    </div>
  );
}
