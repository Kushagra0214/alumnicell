import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Card from "./Card";
import "./team.css";

const MyCarousel = ({members}) => {
    const maxId=members.length-1; 
    // Set of the visible card and its styling
    const [visible, setVisible]= useState( [
        {id:0, pos:"first", layer:"#BFE3EB"},
        {id:1, pos:"second", layer:"#99D2DF"}, 
        {id:2, pos:"third", layer:"#80C6D7"} ,
        {id:3, pos:"fourth", layer:"#99D2DF"},
        {id:4, pos:"fifth", layer:"#BFE3EB"}
    ]);

    const incId = () =>{
        // Animation
        document.querySelector('.l-stand').classList.add('trans');
        document.querySelector('.first').classList.add('trans');
        document.querySelector('.second').classList.add('trans');
        document.querySelector('.third').classList.add('trans');
        document.querySelector('.fourth').classList.add('trans');
        document.querySelector('.fifth').classList.add('trans');
        // Smooth slide cards
        document.querySelector('.fifth').classList.add('r-stand');
        document.querySelector('.fifth').classList.remove('fifth');
        document.querySelector('.fourth').classList.add('fifth');
        document.querySelector('.fourth').classList.remove('fourth');
        document.querySelector('.third').classList.add('fourth');
        document.querySelector('.third').classList.remove('third');
        document.querySelector('.second').classList.add('third');
        document.querySelector('.second').classList.remove('second');
        document.querySelector('.first').classList.add('second');
        document.querySelector('.first').classList.remove('first');
        document.querySelector('.l-stand').classList.add('first');
        document.querySelector('.l-stand').classList.remove('l-stand');
        
        let updatedVisible = visible.map((i)=>{
            return i.id === 0 ? {...i, id: maxId} : {...i, id: i.id-1};         
        });
        // Wait for the animation to end 500 here since in css trans: 0.5s (Change both whenever needed)
        setTimeout(() => {  
            // Data change
            setVisible(updatedVisible); 
            // Remove animation
            document.querySelector('.second').classList.remove('trans');
            document.querySelector('.third').classList.remove('trans');
            document.querySelector('.fourth').classList.remove('trans');
            document.querySelector('.fifth').classList.remove('trans');
            document.querySelector('.r-stand').classList.remove('trans');
            // Bring back all divs to position (To maintain continuity - Done in jiffy so appears that only data changed)
            document.querySelector('.first').classList.add('l-stand');
            document.querySelector('.first').classList.remove('first');
            document.querySelector('.second').classList.add('first');
            document.querySelector('.second').classList.remove('second');
            document.querySelector('.third').classList.add('second');
            document.querySelector('.third').classList.remove('third');
            document.querySelector('.fourth').classList.add('third');
            document.querySelector('.fourth').classList.remove('fourth');
            document.querySelector('.fifth').classList.add('fourth');
            document.querySelector('.fifth').classList.remove('fifth');
            document.querySelector('.r-stand').classList.add('fifth');
            document.querySelector('.r-stand').classList.remove('r-stand');
            document.querySelector('.ri').classList.add('r-stand');
            document.querySelector('.ri').classList.remove('fifth');
         }, 500);

    }
    const decId = () =>{
        // Animation
        document.querySelector('.r-stand').classList.add('trans');
        document.querySelector('.first').classList.add('trans');
        document.querySelector('.second').classList.add('trans');
        document.querySelector('.third').classList.add('trans');
        document.querySelector('.fourth').classList.add('trans');
        document.querySelector('.fifth').classList.add('trans');
        // Smooth slide cards
        document.querySelector('.first').classList.add('l-stand');
        document.querySelector('.first').classList.remove('first');
        document.querySelector('.second').classList.add('first');
        document.querySelector('.second').classList.remove('second');
        document.querySelector('.third').classList.add('second');
        document.querySelector('.third').classList.remove('third');
        document.querySelector('.fourth').classList.add('third');
        document.querySelector('.fourth').classList.remove('fourth');
        document.querySelector('.fifth').classList.add('fourth');
        document.querySelector('.fifth').classList.remove('fifth');
        document.querySelector('.r-stand').classList.add('fifth');
        document.querySelector('.r-stand').classList.remove('r-stand');

        let updatedVisible = visible.map((i)=>{
            return i.id === maxId ? {...i, id: 0} : {...i, id: i.id+1};         
        });
        // Wait for the animation to end 500 here since in css trans: 0.5s (Change both whenever needed)
        setTimeout(() => {  
            // Data change
            setVisible(updatedVisible);
            // Remove animation
            // document.querySelector('.l-stand').classList.remove('trans');
            // document.querySelector('.first').classList.remove('trans');
            // document.querySelector('.second').classList.remove('trans');
            // document.querySelector('.third').classList.remove('trans');
            // document.querySelector('.fourth').classList.remove('trans');
            // document.querySelector('.fifth').classList.remove('trans');
            // Bring back all divs to position (To maintain continuity - Done in jiffy so appears that only data changed)
            document.querySelector('.fifth').classList.add('r-stand');
            document.querySelector('.fifth').classList.remove('fifth');
            document.querySelector('.fourth').classList.add('fifth');
            document.querySelector('.fourth').classList.remove('fourth');
            document.querySelector('.third').classList.add('fourth');
            document.querySelector('.third').classList.remove('third');
            document.querySelector('.second').classList.add('third');
            document.querySelector('.second').classList.remove('second');
            document.querySelector('.first').classList.add('second');
            document.querySelector('.first').classList.remove('first');

            // document.querySelector('.l-stand').classList.add('first');
            // document.querySelector('#left').classList.remove('first');
            // // console.log(document.querySelector('.first').classList);
            // // document.querySelector('.le').classList.add('l-stand');
            // // document.querySelector('.l-stand').classList.add('first');
            // document.querySelector('.first').classList.remove('l-stand');
         }, 500); 
    }
  return (
    <div className="slide hi-slide">
        <div className="hi-prev" onClick={decId}>
        <FontAwesomeIcon className="font-awesome" color="#008eb0" icon={faChevronLeft} size="xl"/></div>
        <div className="hi-next" onClick={incId}>
        <FontAwesomeIcon className="font-awesome" color="#008eb0" icon={faChevronRight} size="xl"/></div>
        <ul>
            {/* Hidden card */}
            <li id='left' className='l-stand le'>
                <Card id={visible[0].id === 0 ? maxId : visible[0].id-1} members={members} colr="#BFE3EB" />
            </li>
                {console.log(visible[0].id)}
            {visible.map( (i) => (
                <li className={i.pos}>
                <Card id={i.id} members={members} colr={i.layer} />
                </li>
            ))}
            {/* Hidden card */}
            <li className='r-stand ri'>
                <Card id={visible[4].id === maxId ? 0 : visible[4].id+1} members={members} colr="#BFE3EB" />
            </li>
        </ul>
    </div>
  )
}

export default MyCarousel