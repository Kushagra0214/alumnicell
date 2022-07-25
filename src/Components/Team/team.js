import React, { useState, useEffect } from "react";
import "./team.css";
import Card from "./Card";

export default function Team(){
    
    const [members, setMembers] = useState([
        {
            id: 0,
            name: 'Name',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. . ',
            imgsrc: 'srcfile',
        },
        {
            id: 1,
            name: 'Prashant',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
        {
            id: 2,
            name: 'Sanskar',
            description: 'Namaste',
            imgsrc: 'srcfile',
        },
        {
            id: 3,
            name: 'John',
            description: 'Hello',
            imgsrc: 'srcfile',
        },
        {
            id: 4,
            name: 'Mack',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
        {
            id: 5,
            name: 'Ali',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
        {
            id: 6,
            name: 'Ram',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
        {
            id: 7,
            name: 'Lakshman',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
        {
            id: 8,
            name: 'Sita',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
        {
            id: 9,
            name: 'Dashrath',
            description: 'Hey guys',
            imgsrc: 'srcfile',
        },
    ]);


   
    return (
        <div className="team">
            <h1 className="heading">TEAM</h1>
            <div className="single-dot" />
            <Card id={0} members={members}/>
            {/* <div class="carousel slide" id="carouselExampleControls" data-slide="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item card-layer2">
                        <Card id={0} members={members}/>
                    </div>
                    <div className="carousel-item card-layer2">
                        <Card id={1} members={members}/>
                    </div>
                    <div className="carousel-item card-active">
                        <Card id={2} members={members}/>
                    </div>
                    <div className="carousel-item card-layer2">
                        <Card id={3} members={members}/>
                    </div>
                    <div className="carousel-itemcard-layer2">
                        <Card id={4} members={members}/>
                    </div>
                </div>
                <a className="carousel-control-prev" onclick="$('#carouselExampleControls').carousel('prev')" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" onclick="$('#carouselExampleControls').carousel('prev')" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div> */}
            <div className="slide hi-slide">
                <div className="hi-prev"></div>
                <div className="hi-next"></div>
                <ul>
                    <li><img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/10860066/pexels-photo-10860066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/2177474/pexels-photo-2177474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/6481918/pexels-photo-6481918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/2498079/pexels-photo-2498079.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></li>
                    <li><img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></li>
                </ul>
            </div>
        </div>
    )
}