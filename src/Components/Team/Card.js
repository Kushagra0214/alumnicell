import React from 'react';
import "./team.css";

const Card = ({ id, members, colr }) => {
  // style={{ backgroundImage: "url("+members[id].imgsrc+")"}}
  return (
          <div className='card-box' style={{ backgroundColor:colr}}>
            <div className='rounded-circle' ><img className='photo' src={members[id].imgsrc}></img></div>
            <div className='nam'>{members[id].name}</div>
            <div className='desc-label'>{members[id].desg}</div>
            
            <div className='desc'> 
            <div className='top-brace'>❝</div> 
              {members[id].description} 
            <div className='bottom-brace'>❞</div>
            </div>
            
          </div>
  )
}

export default Card