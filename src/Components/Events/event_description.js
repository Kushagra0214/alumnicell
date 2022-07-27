import React from "react";
import "./event_description.css";
import {useParams, useLocation} from 'react-router-dom';

const event_post = [
    {
      id: 1,
      image: "/img/event/IIT_GOA_BG.png",
      title: "Two lines for the Event",
      date: "00 Month 20XX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    },
    {
      id: 2,
      image: "/img/event/img2.jpg",
      title: "Two lines for the Event",
      date: "00 Month 20XX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    },
    {
      id: 3,
      image: "/img/event/img1.jpg",
      title: "Two lines for the Event",
      date: "00 Month 20XX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  
    },
    {
      id: 4,
      image: "/img/event/img2.jpg",
      title: "Two lines for the Event",
      date: "00 Month 20XX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  
    },
    {
      id: 5,
      image: "/img/event/img1.jpg",
      title: "Two lines for the Event",
      date: "00 Month 20XX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  
    },
]  

export default function EventDescription(){
    const type = useParams();
    let item = useLocation().hash;
    item = parseInt(item.substr(1, item.length - 1)) - 1;
    console.log(type);
    console.log(item);
    return (
        <div className="event-desc">
            <h1>{event_post[item].title}</h1>
            <h2>{event_post[item].date}</h2>
            <div className="event-desc-body">
                <div className="image-with-dot">
                <img className="event-image" src={event_post[item].image} alt="Event_Image"></img>
                <div className="event-desc-styling-dots">
                    <div className="single-dot" style={{marginTop: 0}}/>
                    <div className="single-dot" />
                    <div className="single-dot" />
                </div>
                </div>
                <p className="description" dangerouslySetInnerHTML={{__html:event_post[item].description + event_post[item].description + event_post[item].description + event_post[item].description + event_post[item].description}}>
                    {/* {event_post[item].description} */}
                </p>
                <div className="event-desc-styling-dots-mobile">
                <div className="single-dot" />
                <div className="single-dot" />
                <div className="single-dot" />
            </div>    
            </div>
        </div>
    )
}