import React, {useState} from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    let [isClicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!isClicked);
    }

    return (
        <div className="navbar">
            <div className="upper-navbar">
                <div className="left-content">
                    <div className="logo-navbar">
                        <img src="/img/logo.png" alt="IIT GOA LOGO"></img>
                    </div>
                    <div className="institute-name">
                        <h2>Indian Institute of Technology Goa</h2>
                    </div>
                    <div className="alumni-heading"><h2>Alumni</h2></div>
                </div>
                <div className="navbar-profile">
                    <Link className="right-content" to="/profile">
                        <img src="/img/profile_pic.png" alt="profile pic"></img>
                        <div>
                            <p className="navbar-name"><strong>Full Name</strong></p>
                            <p className="navbar-degree">Degree Year</p>
                        </div>
                    </Link>
                </div>
                <button className="menu-icon" onClick={handleClick}><FontAwesomeIcon className="font-awesome" icon={faBars} size="xl"/></button>
            </div>
            <div className={isClicked ? "active lower-navbar" : "lower-navbar"}>
                <div className="close-icon" onClick={handleClick}><FontAwesomeIcon className='xmark' icon={faXmark}/></div>
                <div>
                    <Link className="navbar-profile menu-profile" to="/profile">
                        <img src="/img/profile_pic.png" alt="profile pic"></img>
                        <div>
                            <p className="navbar-name"><strong>Full Name of user</strong></p>
                            <p className="navbar-degree">Degree Year</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-list">
                    <a href="/#home"><strong>HOME</strong></a>
                    <a href="/#about"><strong>ABOUT</strong></a>
                    <a href="/#events"><strong>EVENTS</strong></a>
                    <a href="/" title="COMING SOON"><strong>NEWSLETTER</strong></a>
                    <a href="/#team"><strong>TEAM</strong></a>
                    <a href="/" title="COMING SOON"><strong>SHARE</strong></a>
                </div>
                <Link to="/login">
                    <div className="navbar-button">
                        <a href="/login"><strong>SIGN IN</strong></a>
                    </div>
                </Link>
            </div>
        </div>
    )
}