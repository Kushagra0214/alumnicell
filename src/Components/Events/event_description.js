import React from "react";
import "./event_description.css";
import {useParams, useLocation} from 'react-router-dom';

const event_post = [
    {
      id: 1,
      image: "/img/event/IIT_GOA_BG.png",
      title: "IIT Goa holds its 3rd Convocation",
      date: "30 July 2022",
      description: "Since its inception in 2016, IIT Goa has consistently worked towards achieving excellence with its students playing a vital role in achieving the goal. And as we all celebrate this progress, the much anticipated Third Convocation is here! Convocation is one of the most important events in not only a student’s life but also in the lives of people who’ve connected with them throughout their university years. It also doubles as a reunion! Students come together one final time to exchange memories and hugs, give valuable advice to their juniors, and take blessings from their teachers and the staff members who’ve watched them grow into the people they are today. <br><br> With the same in mind, we hope that the Batch of 2022 gives us a chance to bid them adieu at <strong>Rajiv Gandhi Kala Mandir</strong>, Ponda as they step forward into their futures. We’ll be looking forward to seeing you all, dressed in pure white, adorning smiles brighter than the color itself on <strong>July 30, ‘22</strong> at <strong>11 a.m.</strong>"
    }
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
                <p className="description" dangerouslySetInnerHTML={{__html:event_post[item].description}}>
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