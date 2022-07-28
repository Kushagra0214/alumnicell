import React, { useState, useEffect, useRef } from "react";
import "./team.css";
import MyCarousel from "./MyCarousel";

export default function Team(){  
    
    
    const [members, setMembers] = useState([
        // Core team        
        {
            name: 'Prashant Choudhary',
            description: ["Post: Alumni Affairs Secretary", <br />,  "prashant.choudhary.20063@iitgoa.ac.in", <br />,  "+91 70652 88851"],
            imgsrc: 'img/team/Prashant.jpeg',
        },
        {   
            name: 'Mr. Rishikesh Narayan',
            description: ["Post: Alumni Affairs Faculty In-Charge", <br />,  "fic-sa@iitgoa.ac.in", <br />,  "+91 74060 58866"],
            imgsrc: 'img/team/Prof.Rishikesh.jpg',
        },
        {
            name: 'Dr. Satyaprakash Ahirwar',
            description: ["Post: Alumni Affairs Faculty Advisor", <br />,  "alumnicell@iitgoa.ac.in", <br />,  "+91 80978 42443"],
            imgsrc: 'img/team/Prof.Satyaprakash.jpg',
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
        // Content team
        {
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        {
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        // Design Team
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        // Social Media Team
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Sanskar Pratap',
            description: ["Post: Alumni Cell Member", <br />,  "sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        // DBMS Team
        { 
            name: 'Akash Khandelwal',
            description: ["Post: DBMS Team Member", <br />,  "akash.khandelwal.21031@iitgoa.ac.in", <br />,  "+91 99230 41275"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Atul Mehta',
            description: ["Post: DBMS Team Member", <br />,  "atul.mehta.21063@iitgoa.ac.in", <br />,  " +91 78779 94958"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Jay Jawale',
            description: ["Post: DBMS Team Member", <br />,  "jay.jawale.21063@iitgoa.ac.in", <br />,  "+91 95796 08314"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Karan Sutariya',
            description: ["Post: DBMS Team Member", <br />,  " karan.sutariya.21033@iitgoa.ac.in", <br />,  " +91 93283 80569"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Sujal Jani',
            description: ["Post: DBMS Team Lead", <br />,  "jani.sujal.21042@iitgoa.ac.in", <br />,  "+91 82009 81070"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Umar Sayed',
            description: ["Post: DBMS Team Member", <br />,  "sayed.umar.21031@iitgoa.ac.in", <br />,  "+91 90825 86538"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: 'Utsav Bansal',
            description: ["Post: DBMS Team Member", <br />,  "utsav.bansal.21042@iitgoa.ac.in", <br />,  "+91 62671 84086"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        { 
            name: ' Yash Bhansali',
            description: ["Post: DBMS Team Member", <br />,  "yash.bhansali.21042@iitgoa.ac.in", <br />,  "+91 73048 93913"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },


        // Core team
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

