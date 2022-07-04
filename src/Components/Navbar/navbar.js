import React from "react";
import "./navbar.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="upper-navbar">
                <div className="left-content">
                    <div className="logo-navbar">
                        <img src="img/logo.png" alt="IIT GOA LOGO"></img>
                    </div>
                    <div className="institute-name">
                        <h2>Indian Institute of Technology Goa | Alumni</h2>
                    </div>
                </div>
                <div className="navbar-profile right-content">
                        <img src="img/profile_pic.png" alt="profile pic"></img>
                        <p>My Profile</p>
                </div>
            </div>
            <div className="lower-navbar">
                <div className="navbar-list">
                    <a href="/">ABOUT</a>
                    <a href="/">EVENTS</a>
                    <a href="/">NEWSLETTER</a>
                    <a href="/">TEAM</a>
                    <a href="/">SHARE</a>
                </div>
                <div className="navbar-button">
                    <a href="/">SIGN IN</a>
                </div>
            </div>
        </div>
    )
}