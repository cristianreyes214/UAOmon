import React from 'react';
import './Start.css';
import Logo from "../Images/logo.png";

const Start = () => (
    <div className="home-container">
        <div>
        <img src={Logo} />
        </div>
        <div>
        <button className="btn-style">Comenzar</button>
        </div>
        </div>
)

export default Start;



