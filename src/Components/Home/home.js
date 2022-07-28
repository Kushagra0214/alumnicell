import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import "./home.css";

export default function Home(){
    const [clicked, setClick] = useState(false);
    const clickHandler = () => {
        console.log(clicked)
        setClick(!clicked);
    }
    return (
        <div className="home" id="home">
            <div className="mask">
                
            </div>
            <form className="login-form" >
                <div onClick={(e) => {
                    e.preventDefault();
                    clickHandler();
                }}>
                    <label for='email'><strong>EMAIL ID </strong></label>
                    <input type="email" name="email" disabled/><br />
                </div>
                <div onClick={(e) => {
                    e.preventDefault();
                    clickHandler();
                }}>
                    <label for='password'><strong>PASSWORD</strong></label>
                    <input type="password" name="password" disabled/><br/>
                </div>
                <button className="login-button" onClick={(e) => {
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