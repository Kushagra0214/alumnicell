import React from 'react';
import "./team.css";

const Card = ({ id, members }) => {
    
  return (
        <div className="card">
          <div className='card-box'>
            <div className='rounded-circle'>{members[id].imgsrc}</div>
            <div className='nam'>{members[id].name}</div>
            <div className='desc-label'>DESCRIPTION</div>
            <div className='top-brace'>❝</div>
            <div className='desc'>{members[id].description}</div>
            <div className='bottom-brace'>❞</div>
          </div>
        </div>
  )
}

export default Card