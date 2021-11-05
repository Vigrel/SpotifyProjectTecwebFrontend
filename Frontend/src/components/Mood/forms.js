import React from "react";
import "./forms.css";

export default function Mood() {
  return (
    <div className='background'>
      <h1 className='app-name'>SoundMood</h1>
      <div className='inputs' style={{display:'flex'}}>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">happy</a>
            <a href="#">angry</a>
            <a href="#">sad</a>
            <a href="#">anxious</a>
            <a href="#">apprehensive</a>
            <a href="#">confident</a>
            <a href="#">excited</a>
          </div>
        </div>
        <input type="url" className="track_url_input" placeholder='asdljasdn'/>

      </div>

    </div>
  );
}
