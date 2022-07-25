import React from 'react'
import "./events.css"
import Slider from './Slider/Slider'

export default function events() {
  return (
    <div className='events' id='events'>
      <h1 className="events-heading">EVENTS</h1>

      <div className="caraousel">
        <Slider/>
      </div>
    </div>

    
  )
}
