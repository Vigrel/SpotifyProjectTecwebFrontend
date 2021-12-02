import { Line } from 'rc-progress';
import React, { useEffect, useState } from "react";
import "./features.css";
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'


export default function Features() {
    const id = useParams()
    const [features, setFeatures] = useState([])

    async function getForm() {
        let response = await axios({
            method: 'GET',
            // url: `https://moodspot.herokuapp.com/api/moods/${id.id}/`,
            url: `http://localhost:8000/api/moods/${id.id}/`,
        });
        setFeatures(response.data)
    }

    useEffect(() => {
        getForm()
        // return () => {
        //     setFeatures([]);
        // };
    }, []);

    return (
        <div className='background'>
            <h1 className='app-name-features'>{features.album_name}, {features.track_name}, {features.artist_name}</h1>
            <div className="bars-group">
                <div className='group'>
                    <p className='label'>acousticness</p>
                    <Line className='bar' percent={features.acousticness * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>danceability</p>
                    <Line className='bar' percent={features.danceability * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>energy</p>
                    <Line className='bar' percent={features.energy * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>instrumentalness</p>
                    <Line className='bar' percent={features.instrumentalness * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>liveness</p>
                    <Line className='bar' percent={features.liveness * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>speechiness</p>
                    <Line className='bar' percent={features.speechiness * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>valence</p>
                    <Line className='bar' percent={features.valence * 100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
            </div>
        </div>
    );
}
