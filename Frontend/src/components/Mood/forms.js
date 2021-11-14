import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./forms.css";

export default function Mood() {
  const [mood, setMood] = useState('Tell us ur mood');
  const [error, setError] = useState('');
  const [features, setFeatures] = useState(null);
  const [input, setInput] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    if (features != null) {
      navigate(`/api/moods/${features.id}`)
    }
  }, [features]);

  async function postForm() {
    if (input == '') {
      setError('insert valid link...')
    }
    if (mood == 'Tell us ur mood') {
      setMood('insert mood...')
    }

    try {
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
    } catch {
      setInput('')
      setError('insert valid link...')
    }
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

        <input
          id='inputText'
          type="url"
          className="track_url_input"
          placeholder={
            error == '' ?
            'u are listening...'
            :
            'insert valid link...'
          }
          value={input}
          onChange={input => setInput(input.target.value)} />
          
        <button className="submit-btn" onClick={postForm}>
          Submit
        </button>
      </div>

    </div>
  );
}