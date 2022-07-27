import React, { useState, useEffect, useRef } from "react";
import "./team.css";
import MyCarousel from "./MyCarousel";

export default function Team(){  
    
    
    const [members, setMembers] = useState([
        {
            name: 'Dr. Satyaprakash Ahirwar',
            description: ["Post: Alumni Affairs Faculty Advisor", <br />,  "alumnicell@iitgoa.ac.in", <br />,  "+91 80978 42443"],
            imgsrc: 'img/team/Prof.Satyaprakash.jpg',
        },
        {   
            name: 'Mr. Rishikesh Narayan',
            description: ["Post: Alumni Affairs Faculty In-Charge", <br />,  "fic-sa@iitgoa.ac.in", <br />,  "+91 74060 58866"],
            imgsrc: 'img/team/Prof.Rishikesh.jpg',
        },
        {
            name: 'Prashant Choudhary',
            description: ["Post: Alumni Affairs Secretary", <br />,  "prashant.choudhary.20063@iitgoa.ac.in", <br />,  "+91 70652 88851"],
            imgsrc: 'img/team/Prashant.jpeg',
        },
        {
            name: 'Naga Tanuja Bathena',
            description: ["Post: GS Academic Affairs", <br />,  "tanuja.naga.19031@iitgoa.ac.in", <br />,  "+91 86887 29847"],
            imgsrc: 'img/team/Tanuja.jpg',
        },
        {
            
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        {
            name: 'Aumkar Lorekar',
            description: ["Post: Alumni Cell Member", <br />,  "aumkar.lorekar.20031@iitgoa.ac.in", <br />,  "+91 89281 02188"],
            imgsrc: 'img/team/Aumkar.jpeg',
        }
    ]);       
    
   
    return (
        <div className="team" id="team">
            <h1 className="team-heading" onClick={()=> (console.log())}>TEAM</h1>
            <div className="team-styling-dots">
                <div className="team-single-dot dot-one " />
                <div className="team-single-dot dot-two" />
                <div className="team-single-dot dot-three" />
            </div>
            <MyCarousel members={members}/>            
        </div>
    )
}

