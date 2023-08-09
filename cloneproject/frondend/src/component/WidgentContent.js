import React from 'react'
import "./css/WidgentContent.css"
import logoimg from "../images/logoimg.jfif"



export default function WidgentContent() {
  return (
    <div className="Widgent-Contents">
      <div className="Widgent-Content">
        <img src={logoimg} alt="logoimg"></img>
        <div className="Widgent-ContentTitle">
          <h5>Moblile App Programmer</h5>

          <p>The best mobile app Development company</p>
        </div>
      </div>
    </div>
  );
}
