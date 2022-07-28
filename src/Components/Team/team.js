import React, { useState, useEffect, useRef } from "react";
import "./team.css";
import MyCarousel from "./MyCarousel";

export default function Team(){  
    
    
    const [members, setMembers] = useState([
        // Core team        
        {
            name: 'Prashant Choudhary',
            desg:"Alumni Affairs Secretary",
            description: ["prashant.choudhary.20063@iitgoa.ac.in", <br />,  "+91 70652 88851"],
            imgsrc: 'img/team/Prashant.jpeg',
        },
        {   
            name: 'Mr. Rishikesh Narayan',
            desg:"Alumni Affairs Faculty In-Charge",
            description: ["fic-sa@iitgoa.ac.in", <br />,  "+91 74060 58866"],
            imgsrc: 'img/team/Prof.Rishikesh.jpg',
        },
        {
            name: 'Dr. Satyaprakash Ahirwar',
            desg:"Alumni Affairs Faculty Advisor",
            description: ["alumnicell@iitgoa.ac.in", <br />,  "+91 80978 42443"],
            imgsrc: 'img/team/Prof.Satyaprakash.jpg',
        },
        {
            name: 'Naga Tanuja Bathena',
            desg:"GS Academic Affairs",
            description: [ "tanuja.naga.19031@iitgoa.ac.in", <br />,  "+91 86887 29847"],
            imgsrc: 'img/team/Tanuja.jpg',
        },
        {
            name: 'Sanskar Pratap',
            desg:"Alumni Cell Member",
            description: ["sanskar.20033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Sanskar.jpeg',
        },
        // Content team
        {
            name: 'Madhura Botave',
            desg:"Content Team Member",
            description: ["madura.botave.21033@iitgoa.ac.in ", <br />,  "+91 88308 46416"],
            imgsrc: 'img/team/Madhura.jpeg',
        },
        {
            name: 'Tiya Gupta',
            desg:"Content Team Lead",
            description: ["tiya.gupta.21033@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Tiya.jpeg',
        },
        { 
            name: 'Trisha Sai Sree',
            desg:"Content Team Member",
            description: [" trisha.saisree.21042@iitgoa.ac.in", <br />,  "+91 80746 75235"],
            imgsrc: 'img/team/Trisha.jpeg',
        },
        // Design Team
        { 
            name: 'Akansha Madavi',
            desg:"Design Team Lead",
            description: ["akansha.madavi.21031@iitgoa.ac.in", <br />,  "+91 70839 10799"],
            imgsrc: 'img/team/Akansha.jpeg',
        },
        { 
            name: 'Vaidehi Chougule',
            desg:"Design Team Lead",
            description: ["vaidehi.chougule.21063@iitgoa.ac.in", <br />,  "+91 86918 16255"],
            imgsrc: 'img/team/Vaidehi.jpeg',
        },
        { 
            name: 'Manali Naik',
            desg:"Design Team Member",
            description: ["manali.naik.20042@iitgoa.ac.in", <br />,  "+91 72489 72507"],
            imgsrc: 'img/team/Manali.jpeg',
        },
        { 
            name: 'Shreya Marda',
            desg:"Design Team Member",
            description: ["shreya.marda.21033@iitgoa.ac.in", <br />,  "+91 76762 86680"],
            imgsrc: 'img/team/Shreya.jpeg',
        },
        // Social Media Team
        { 
            name: 'Nitin Kumar Yadav',
            desg:"Social Media Team Lead",
            description: ["mulayam.21031@iitgoa.ac.in", <br />,  "+91 98175 68174"],
            imgsrc: 'img/team/Nitin.jpeg',
        },
        { 
            name: 'Mulayam',
            desg:"Social Media Team Member",
            description: ["Post: Alumni Cell Member", <br />,  "nitin.yadav.21042@iitgoa.ac.in", <br />,  "+91 63506 00194"],
            imgsrc: 'img/team/Mulayam.jpg',
        },
        // DBMS Team
        { 
            name: 'Akash Khandelwal',
            desg:"DBMS Team Member",
            description: ["akash.khandelwal.21031@iitgoa.ac.in", <br />,  "+91 99230 41275"],
            imgsrc: 'img/team/Akash.jpeg',
        },
        { 
            name: 'Atul Mehta',
            desg:"DBMS Team Member",
            description: ["atul.mehta.21063@iitgoa.ac.in", <br />,  " +91 78779 94958"],
            imgsrc: 'img/team/Atul.jpeg',
        },
        { 
            name: 'Jay Jawale',
            desg:"DBMS Team Member",
            description: ["jay.jawale.21063@iitgoa.ac.in", <br />,  "+91 95796 08314"],
            imgsrc: 'img/team/Jay.jpeg',
        },
        { 
            name: 'Karan Sutariya',
            desg:"DBMS Team Member",
            description: ["karan.sutariya.21033@iitgoa.ac.in", <br />,  " +91 93283 80569"],
            imgsrc: 'img/team/Karan.jpeg',
        },
        { 
            name: 'Sujal Jani',
            desg:"DBMS Team Lead",
            description: ["jani.sujal.21042@iitgoa.ac.in", <br />,  "+91 82009 81070"],
            imgsrc: 'img/team/Sujal.jpeg',
        },
        { 
            name: 'Umar Sayed',
            desg:"DBMS Team Member",
            description: ["sayed.umar.21031@iitgoa.ac.in", <br />,  "+91 90825 86538"],
            imgsrc: 'img/team/Umar.png',
        },
        { 
            name: 'Utsav Bansal',
            desg:"DBMS Team Member",
            description: ["utsav.bansal.21042@iitgoa.ac.in", <br />,  "+91 62671 84086"],
            imgsrc: 'img/team/Utsav.jpeg',
        },
        { 
            name: ' Yash Bhansali',
            desg:"DBMS Team Member",
            description: ["yash.bhansali.21042@iitgoa.ac.in", <br />,  "+91 73048 93913"],
            imgsrc: 'img/team/Yash.jpeg',
        },


        // Core team
        {
            name: 'Aumkar Lorekar',
            desg:"Alumni Cell Member",
            description: ["aumkar.lorekar.20031@iitgoa.ac.in", <br />,  "+91 89281 02188"],
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

