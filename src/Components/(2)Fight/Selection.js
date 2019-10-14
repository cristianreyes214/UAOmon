import React from 'react';
import './Fight-style.css';
import Logo from "../Images/uaomon-logo.png";
import charmander from '../Images/charmandersito.png';
import { Link } from 'react-router-dom';

const Selection = () => (
    <div className="fight-container">
    <div className="info-container">
        <div>
        <img src={Logo} />
        <p className="text-information">
        Parcial práctico
        <br></br>
        Segundo corte
        <br></br>
        <br></br>
        Cristian Felipe Reyes Cortes
        <br></br>
        2140174
        <br></br>
        </p>
        </div>
        <div>
        <Link to='/'><button className="btn-style">Regresar</button></Link>
        </div>
        </div>
        
        <div className="collage-style">
        
        <h2>Selección de personaje</h2>
        <div className="targets">
            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <Link to='/pelea'><button className="btn-style">Seleccionar</button></Link>
            </div>

            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

                    <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

            <div className="selection-style">
            <img src={charmander} />
            <b>
            <p className="text-card">
            Nombre del personaje
            <br></br>
            100 de ataque
            <br></br>
            200 de defensa
            <br></br>
            </p></b>
            <button className="btn-style">Seleccionar</button>
            </div>

            </div>
        </div>
        </div>
)

export default Selection;