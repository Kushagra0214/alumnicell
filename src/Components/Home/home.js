import React from "react";
import "./home.css";

export default function Home(){
    return (
        <div className="home">
            <div className="mask">
                
            </div>
            <form className="login-form">
                <label for='email'><strong>EMAIL ID </strong></label>
                <input type="email" name="email"/><br />
                <label for='password'><strong>PASSWORD</strong></label>
                <input type="password" name="password"/><br/>
                <button className="login-button">SIGN IN</button>
            </form>
        </div>
    )
}