import React from 'react';
import "./team.css";

const Card = ({ id, members, colr }) => {
    
  return (
          <div className='card-box' style={{ backgroundColor:colr}}>
            <div className='rounded-circle' style={{ backgroundImage: "url("+members[id].imgsrc+")"}}></div>
            <div className='nam'>{members[id].name}</div>
            <div className='desc-label'>DESCRIPTION</div>
            
            <div className='desc'> 
            <div className='top-brace'>❝</div> 
              {members[id].description} 
            <div className='bottom-brace'>❞</div>
            </div>
            
          </div>
  )
}

export default Card