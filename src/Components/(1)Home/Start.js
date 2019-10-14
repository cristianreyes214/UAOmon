import React from 'react';
import './Start.css';
import Logo from "../Images/uaomon-logo.png";
import { Link } from 'react-router-dom';

const Start = () => (
    <div className="home-container">
        <div>
        <img src={Logo} />
        </div>
        <div>
        <Link to='/seleccion'><button className="btn-style-home">Comenzar</button></Link>
        </div>
    </div>
)

export default Start;



