import React from "react";
import "./login.css";

export default function Home(){
    return (
        <div className="login-mobile">
            <img src="img/IIT_GOA_BG.png" alt="IIT Goa's Hostel"></img>
            <form className="login-form-mobile">
                <input type="email" name="email" placeholder="Email Id"/><br />
                <input type="password" name="password" placeholder="Password"/><br/>
                <button className="login-button-mobile">SIGN IN</button>
            </form>
        </div>
    )
}