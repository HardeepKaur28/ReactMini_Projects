import React, { useState, useEffect } from 'react';
import image from "./assets/photo-1555375771-14b2a63968a9.avif";
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }
  setInterval(updateTime,1000)
  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img src={image} alt="iPhone" className="iphone-image" />
        </div>
        <div className="text-container">
          <h1 className="title">iPhone Give away</h1>
          <p className="description">Hurry up! Participate in our iPhone giveaway now for a chance to win the latest iPhone model. Don't miss out on this amazing opportunity!</p>
          <div className="time-container">
            <h2 className="time-label">Time Remaining:</h2>
            <h1 className="time">{ctime}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
