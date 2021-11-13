import React, { useState, useEffect } from "react";
import "./forms.css";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Mood() {
  const [mood, setMood] = useState('Tell us ur mood');
  const [error, setError] = useState(false);
  const [features, setFeatures] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (features != null) {
      navigate(`/api/moods/${features.id}`)
    }
  }, [features]);

  async function postForm() {
    var input = await document.getElementById("inputText").value;
    // if (input == '') {
    //   setError('Please insert link...')
    // }
    // if (mood == 'Tell us ur mood') {
    //   setMood('Please insert mood...')
    // }
    // if (mood == 'Please insert mood...' || error == 'Please insert link...') {
    //   return
    // }

    let response = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/moods/',
      data: {
        mood: mood,
        track_url: input
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
            <a onClick={() => setMood('😀 happy')}> happy</a>
            <a onClick={() => setMood('😡 angry')}>angry</a>
            <a onClick={() => setMood('😢 sad')}>sad</a>
            <a onClick={() => setMood('😰 anxious')}>anxious</a>
            <a onClick={() => setMood('😎 confident')}>confident</a>
            <a onClick={() => setMood('😝 excited')}>excited</a>
          </div>
        </div>

        {/* {error == null ?
          <input id='inputText' type="url" className="track_url_input" placeholder='u are listening...' />
          :
          <input id='inputText' type="url" className="track_url_input_error" placeholder={error} />
        }

        {mood == 'Please insert mood...' || error == 'Please insert link...' || mood == 'Tell us ur mood' ?
          <button className="submit-btn" onClick={postForm}>
            Submit
          </button>
          :
          <button className="submit-btn" onClick={postForm}>
            Submit
          </button>
        } */}

        <input
          id='inputText'
          type="url"
          className="track_url_input"
          placeholder='u are listening...'
        />

        <button className="submit-btn" onClick={postForm}>
          Submit
        </button>

      </div>

    </div>
  );
}

// npm react-router-dom@5.2.0
