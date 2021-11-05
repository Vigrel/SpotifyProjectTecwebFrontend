import React, { useState } from "react";
import "./forms.css";

export default function Mood() {
  const [mood, setMood] = useState('');
  const [trackUrl, setTrackUrl] = useState('');
  
  console.log(mood)
  return (
    <div className='background'>
      <h1 className='app-name'>SoundMood</h1>
      <div className='inputs' style={{display:'flex'}}>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#" onClick={()=>setMood('happy')}>happy</a>
            <a href="#" onClick={()=>setMood('angry')}>angry</a>
            <a href="#" onClick={()=>setMood('sad')}>sad</a>
            <a href="#" onClick={()=>setMood('anxious')}>anxious</a>
            <a href="#" onClick={()=>setMood('apprehensive')}>apprehensive</a>
            <a href="#" onClick={()=>setMood('confident')}>confident</a>
            <a href="#" onClick={()=>setMood('excited')}>excited</a>
          </div>
        </div>
        <input type="url" className="track_url_input" placeholder='asdljasdn'/>

      </div>

    </div>
  );
}
