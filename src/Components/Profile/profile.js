import React from "react";
import "./profile.css";

export default function Profile() {
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
          <div>Details</div>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Degree</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Contact Number</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">About User</label>
            <input type="text" />
        </div>
        <div>
            <button>SAVE PROFILE</button>
        </div>
            
  
        </div>
      </div>
    </>
  );
}
