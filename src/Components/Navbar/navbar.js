import React, {useState} from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    let [isClicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!isClicked);
        console.log(isClicked);
    }

    return (
        <div className="navbar">
            <div className="upper-navbar">
                <div className="left-content">
                    <div className="logo-navbar">
                        <img src="img/logo.png" alt="IIT GOA LOGO"></img>
                    </div>
                    <div className="institute-name">
                        <h2>Indian Institute of Technology Goa</h2>
                    </div>
                    <div className="alumni-heading"><h2>Alumni</h2></div>
                </div>
                <div className="navbar-profile right-content">
                        <img src="img/profile_pic.png" alt="profile pic"></img>
                        <div>
                            <p className="navbar-name"><strong>Full Name</strong></p>
                            <p className="navbar-degree">Degree Year</p>
                        </div>
                </div>
                <button className="menu-icon" onClick={handleClick}><FontAwesomeIcon className="font-awesome" icon={faBars} size="xl"/></button>
            </div>
            <div className={isClicked ? "active lower-navbar" : "lower-navbar"}>
                <div className="close-icon" onClick={handleClick}><FontAwesomeIcon className='xmark' icon={faXmark}/></div>
                <div className="navbar-profile menu-profile">
                        <img src="img/profile_pic.png" alt="profile pic"></img>
                        <div>
                            <p className="navbar-name"><strong>Full Name of user</strong></p>
                            <p className="navbar-degree">Degree Year</p>
                        </div>
                </div>
                <div className="navbar-list">
                    <a href="/"><strong>HOME</strong></a>
                    <a href="/"><strong>ABOUT</strong></a>
                    <a href="/"><strong>EVENTS</strong></a>
                    <a href="/"><strong>NEWSLETTER</strong></a>
                    <a href="/"><strong>TEAM</strong></a>
                    <a href="/"><strong>SHARE</strong></a>
                </div>
                <div className="navbar-button">
                    <a href="/login"><strong>SIGN IN</strong></a>
                </div>
            </div>
        </div>
    )
}