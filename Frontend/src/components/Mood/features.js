import { Line } from 'rc-progress';
import React, { useState } from "react";
import "./features.css";

export default function Mood() {
    const [mood, setMood] = useState('Tell us ur mood');
    const [trackUrl, setTrackUrl] = useState('');
    const [features, setFeatures] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div className='background'>
            <div className="bars-group">
                <div className='group'>
                    <p className='label'>Acousticness</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>danceability</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>energy</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>instrumentalness</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>liveness</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>speechiness</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>valence</p>
                    <Line className='bar'  percent="10" strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
            </div>
        </div>
    );
}
