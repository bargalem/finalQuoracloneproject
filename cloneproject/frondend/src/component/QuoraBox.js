import React from 'react'
import "./css/QuoraBox.css"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/Userslice'

export default function QuoraBox() {
  const user=useSelector(selectUser)
  return (
    <div className='quoraBox'>
 <div className='quoraBox-info'>
<Avatar src={user?.photo}/>
</div>

<div className='quoraBox-qura'>

<h5>What is your question or link</h5>
</div>

    </div>
  )
}
