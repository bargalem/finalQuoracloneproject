import React from 'react'
import "./css/Qura.css"
import QuoraHeader from './QuoraHeader'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'

export default function Qura() {
  return (
    <div className='qura'>
      <QuoraHeader/>

      <div className='Quora-Containts'>
      <div className='Quora-Containt'>
<Sidebar/>
<Feed/>
<Widget/>


      </div>

      </div>
     </div>
  )
}
