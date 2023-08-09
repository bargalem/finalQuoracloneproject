import React from 'react'
import "./css/SidebarOption.css"
import sidebarimg from "../images/logoimg.jfif"

export default function SidebarOption() {
  return (
    <div className="Sidebaroptions">
      <div className="Sidebaroption">
        <img src={sidebarimg} alt="sidebarimg"></img>
        <p>History</p>
      </div>

      <div className="Sidebaroption">
        <img src={sidebarimg} alt="sidebarimg"></img>
        <p>History</p>
      </div>


      <div className="Sidebaroption">
        <img src={sidebarimg} alt="sidebarimg"></img>
        <p>History</p>
      </div>

      <div className="Sidebaroption">
        <img src={sidebarimg} alt="sidebarimg"></img>
        <p>History</p>
      </div>

    </div>
  );
}
