import React from 'react'
import "./css/Widget.css"
import WidgentContent from './WidgentContent'

export default function Widget() {
  return (
    <div className='Widget'>
<div className='Widget-Header'>
  <h5>Space to Follow</h5>
</div>


<div className='Widget-contents'></div>
<WidgentContent/>
    </div>
  )
}
