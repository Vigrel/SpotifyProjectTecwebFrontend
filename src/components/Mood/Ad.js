import React from "react";
import "./ad.css";

export default function Ad(props) {
  return (
    <div className="card">
      <h3 className="card-headline">{props.headline}</h3>
      <p className="card-description">{props.description}</p>
      <img className="card-img"src={props.img}/>
    </div>
  );
}