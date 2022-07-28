import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import "./login.css";

export default function Home(){
    const [clicked, setClick] = useState(false);
    const clickHandler = () => {
        console.log(clicked)
        setClick(!clicked);
    }
    return (
        <div className="login-mobile">
            <img src="img/IIT_GOA_BG.png" alt="IIT Goa's Hostel"></img>
            <form className="login-form-mobile">
                <input type="email" name="email" placeholder="Email Id" disabled/><br />
                <input type="password" name="password" placeholder="Password" disabled/><br/>
                <button className="login-button-mobile" onClick={(e) => {
                    e.preventDefault();
                    clickHandler();
                }}>SIGN IN</button>
            </form>
            <div className={clicked? "coming-soon coming-soon-active" : "coming-soon"}>
                <div className="close-icon" onClick={clickHandler}><FontAwesomeIcon className='xmark' icon={faXmark}/></div>
                <h1>COMING SOON</h1>
            </div>
        </div>
    )
}