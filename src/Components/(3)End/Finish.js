//Dependencie
import React from 'react';
import { Link } from 'react-router-dom';

//Style
import './Finish.css';

//Assets
import Logo from "../Images/uaomon-logo.png";


const Finish = () => (
    <div className="finish-container">
        <div>
            <img src={Logo} />
            <h2>¡Ganaste!</h2>
            <br></br>
        </div>
        <div>
        <   Link to='/seleccion'><button className="btn-style-finish">Reiniciar</button></Link>
        </div>
    </div>
)

export default Finish;