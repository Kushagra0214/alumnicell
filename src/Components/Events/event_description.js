import React from "react";
import "./event_description.css";
import {useParams, useLocation} from 'react-router-dom';

export default function EventDescription(){
    const type = useParams();
    const item = useLocation();
    console.log(type);
    console.log(item);
    return (
        <div className="event-desc">
            <h1>Event Title</h1>
            <h2>00 Month 20XX</h2>
            <div className="event-desc-body">
                <img className="event-image" src="/img/IIT_GOA_BG.png" alt="Event_Image"></img>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                    est laborum.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </p>
                <div className="event-desc-styling-dots">
                    <div className="single-dot" />
                    <div className="single-dot" />
                    <div className="single-dot" />
                </div>
            </div>    
        </div>
    )
}