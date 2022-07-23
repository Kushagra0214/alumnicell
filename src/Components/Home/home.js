import React from "react";
import "./home.css";

export default function Home(){
    return (
        <div className="home">
            <div className="home-background">
                <div className="input-group rounded">
                    <input type="search" className="width-fi form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                    </div>
                </div>
            
        </div>
    )
}