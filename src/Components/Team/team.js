import React, { useState, useEffect, useRef } from "react";
import "./team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Card from "./Card";
import $ from 'jquery';


$(function() {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 2000,
            
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})




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

    console.log("Hi bri");
    const el=useRef();

    const happen = ()=>{
        console.log("Yes!");
        $(el).hiSlide();
    }
    useEffect(()=>{
        
    },[]);
    
    
    
   
    return (
        <div className="team" id="team">
            <h1 className="team-heading">TEAM</h1>
            <div className="team-styling-dots">
                <div className="team-single-dot dot-one " />
                <div className="team-single-dot dot-two" />
                <div className="team-single-dot dot-three" />
            </div>
            <Card id={0} members={members}/>
            <div ref={el} className="slide hi-slide">
                <div className="hi-prev"><FontAwesomeIcon className="font-awesome" color="#008eb0" icon={faChevronLeft} size="xl"/></div>
                <div className="hi-next">
                <FontAwesomeIcon className="font-awesome" color="#008eb0" icon={faChevronRight} size="xl"/>
                </div>
                <ul onClick={happen}>
                    <li>
                        <Card id={0} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    </li>
                    <li>
                        <Card id={1} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/10860066/pexels-photo-10860066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />*/}
                    </li> 
                    <li>
                        <Card id={2} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/2177474/pexels-photo-2177474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    </li>
                    <li>
                        <Card id={3} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/6481918/pexels-photo-6481918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    </li>
                    <li>
                        <Card id={4} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                    </li>
                    <li>
                        <Card id={5} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/2498079/pexels-photo-2498079.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
                    </li>
                    <li>
                        <Card id={6} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
                    </li>
                    <li>
                        <Card id={7} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
                    </li>
                    <li>
                        <Card id={8} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
                    </li>
                    <li>
                        <Card id={9} members={members}/>
                        {/* <img src="https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
                    </li>

                </ul>
            </div>
        </div>
    )
}

