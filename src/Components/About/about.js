import React from "react";
import "./about.css";

export default function About(){
    return (
        <div className="about" id="about">
            <h1 className="about-heading">ABOUT</h1>
            <h3 className="about-subheading">Alumni Cell</h3>
            <p className="about-para about-para-1">
                IIT Goa was established in 2016 and since then has been producing brilliant minds. 
                Founded in June’22, Alumni Cell, IIT Goa, works with the goal of connecting our institute’s 
                former pupils with people linked with the institute including other alumni, faculty as well 
                as students currently a part of the organization. With a strong base of 300+ alumni and a 
                hardworking Alumni Cell, IIT Goa enjoys an active alumni network, steadily growing at the 
                rate of 200+ alumni every year.
                <br />
                2020 has been the most remarkable year in the history of IIT Goa with its first-ever batch 
                graduating with record placement. This achievement has only been made better
            </p>
            <p className="about-para about-para-2">
                by continuing the legacy by the second batch. As witnesses to this progress, our 10+ members Alumni Cell 
                is working hard with a clear vision.
                <br />
                Our intention is to organize Seminars, Annual Alumni Meets, and many more events in order 
                to create and maintain a healthy relationship between the former and current students. 
                Our alumni have only made us proud, and we consider it our duty to make them feel special 
                and connected with the university where they spent their memorable academic years. As we 
                conclude, we hope our future goal of becoming the best among the newer IITs edges closer 
                to us every continuing year.
            </p>
            <div className="about-styling-dots">
                <div className="single-dot" />
                <div className="single-dot" />
                <div className="single-dot" />
            </div>
        </div>
    )
}