import { Line } from 'rc-progress';
import React from "react";
import "./features.css";

export default function Features() {
    const features = JSON.parse(localStorage.getItem('features'))
    return (
        <div className='background'>
            <div className="bars-group">
                <div className='group'>
                    <p className='label'>acousticness</p>
                    <Line className='bar'  percent={features.acousticness*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>danceability</p>
                    <Line className='bar'  percent={features.danceability*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>energy</p>
                    <Line className='bar'  percent={features.energy*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>instrumentalness</p>
                    <Line className='bar'  percent={features.instrumentalness*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>liveness</p>
                    <Line className='bar'  percent={features.liveness*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>speechiness</p>
                    <Line className='bar'  percent={features.speechiness*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
                <div className='group'>
                    <p className='label'>valence</p>
                    <Line className='bar'  percent={features.valence*100} strokeWidth="2.5" strokeColor="#cdf564" trailColor="rgba(205, 245, 100, 0.1)" />
                </div>
            </div>
        </div>
    );
}
