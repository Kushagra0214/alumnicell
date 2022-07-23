import React, { useState } from "react";
import "./profile.css";

export default function Profile() {

  const [info, setInfo] = useState(true)

  return (
    <>
      <div className="container">
        <div className="profile">
          <div>MY PROFILE</div>
          <div className="profile_img">
            <img src="https://c4.wallpaperflare.com/wallpaper/221/266/392/rihanna-face-hair-wind-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            Name of student
            <p>Degree Year</p>
          </div>
        </div>
        <div className="details">
          <div>
          <div style={{fontWeight: "bolder"}}>Details</div> <br />
          <button onClick={() => setInfo(true)} >Edit Profile</button>
          </div>
          <div>
            <label htmlFor="">Name</label><br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">Degree</label> <br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">Email</label><br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">Contact Number</label><br />
            <input id="contact" type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">About User</label><br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <button id="save" onClick={() => setInfo(false)} >Save Profile</button>
        </div>
            
  
        </div>
      </div>
    </>
  );
}
