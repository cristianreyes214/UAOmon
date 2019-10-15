//Dependencies
import React from 'react';

//Style
import './Start.css';

//Assets
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



