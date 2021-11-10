import React, { useState } from "react";
import "./forms.css";
import axios from 'axios'

export default function Mood() {
  const [mood, setMood] = useState('Tell us ur mood');
  const [trackUrl, setTrackUrl] = useState('');
  const [features, setFeatures] = useState(null);
  const [error, setError] = useState(null);

  async function postForm() {
    var input = document.getElementById("inputText").value;
    setTrackUrl(input)
    if (input == '') {
      setError('Please insert link...')
    }
    if (mood == 'Tell us ur mood') {
      setMood('Please insert mood...')
    }
    if(mood == 'Please insert mood...' || error == 'Please insert link...'){
      return
    }

    let response = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/moods/',
      data: {
        mood: mood,
        track_url: trackUrl
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    setFeatures(response.data)
  }

  return (
    <div className='background'>
      <h1 className='app-name'>SoundMood</h1>
      <div className='inputs' style={{ display: 'flex' }}>
        <div className="dropdown">
          <button className="dropbtn">{mood}</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setMood('😀 happy')}> happy</a>
            <a href="#" onClick={() => setMood('😡 angry')}>angry</a>
            <a href="#" onClick={() => setMood('😢 sad')}>sad</a>
            <a href="#" onClick={() => setMood('😰 anxious')}>anxious</a>
            <a href="#" onClick={() => setMood('😎 confident')}>confident</a>
            <a href="#" onClick={() => setMood('😝 excited')}>excited</a>
          </div>
        </div>
        {error == null ?
          <input id='inputText' type="url" className="track_url_input" placeholder='u are listening...' />
          :
          <input id='inputText' type="url" className="track_url_input_error" placeholder={error} />
        }
        <button className="submit-btn" onClick={postForm}>Submit</button>
      </div>

    </div>
  );
}
