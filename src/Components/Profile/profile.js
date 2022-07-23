import React, { useState } from "react";
import "./profile.css";

export default function Profile() {

  const [info, setInfo] = useState(false)

  return (
    <>
      <div className="container">
        <div className="profile">
          <div style={{fontSize: '30px', fontWeight: 'bold', color: '#237AB3'}}>MY PROFILE</div>
          <div className="profile_img">
            <img src="https://c4.wallpaperflare.com/wallpaper/221/266/392/rihanna-face-hair-wind-wallpaper-preview.jpg" alt="" />
          </div>
          <div style={{fontWeight: "600", fontSize: '20px'}}>
            Name of User <br /> <span style={{fontWeight: "initial", fontSize: '17px'}}>Degree Year</span>
          </div>
        </div>
        <div className="details">
          <div>
          <div style={{fontWeight: "bolder", fontSize: '21px', marginBottom: '2vh'}}>DETAILS</div> <br />
          {!info && <button onClick={() => setInfo(true)} >Edit Profile</button>}
          </div>
          <div>
            <label htmlFor="">NAME</label><br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">DEGREE</label> <br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">EMAIL</label><br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">CONTACT NUMBER</label><br />
            <input id="contact" type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            <label htmlFor="">ABOUT USER</label><br />
            <input type="text" disabled = {info ? false : true} spellCheck="false"/>
        </div><br />
        <div>
            {info && <button id="save" onClick={() => setInfo(false)} >Save Profile</button>}
        </div>
        </div>
      </div>
      </>
  );
}
