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
                        <div>
                            <p class="navbar-name"><strong>FULL NAME</strong></p>
                            <p class="navbar-degree">DEGREE YEAR</p>
                        </div>
                </div>
            </div>
            <div className="lower-navbar">
                <div className="navbar-list">
                    <a href="/"><strong>ABOUT</strong></a>
                    <a href="/"><strong>EVENTS</strong></a>
                    <a href="/"><strong>NEWSLETTER</strong></a>
                    <a href="/"><strong>TEAM</strong></a>
                    <a href="/"><strong>SHARE</strong></a>
                </div>
                <div className="navbar-button">
                    <a href="/"><strong>SIGN IN</strong></a>
                </div>
            </div>
        </div>
    )
}