//Dependencies 
import React from 'react';
import { Link } from 'react-router-dom';

//Style
import './Selection.css';

//Assets
import Logo from "../Images/uaomon-logo.png";
import charmander from '../Images/charmandersito.png';


const Selection = () => (
    <div className="selection-container">
        <div className="info-container-selection">
            <div>
                <img src={Logo} />
                <p className="text-information-selection">
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
                <Link to='/'><button className="btn-style-selection">Regresar</button></Link>
            </div>
        </div>
            
        <div className="collage-style-selection">           
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
                    <Link to='/pelea'><button className="btn-style-selection">Seleccionar</button></Link>
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
                    <button className="btn-style-selection">Seleccionar</button>
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
                    <button className="btn-style-selection">Seleccionar</button>
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
                    <button className="btn-style-selection">Seleccionar</button>
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
                    <button className="btn-style-selection">Seleccionar</button>
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
                    <button className="btn-style-selection">Seleccionar</button>
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
                    <button className="btn-style-selection">Seleccionar</button>
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
                    <button className="btn-style-selection">Seleccionar</button>
                </div>
            </div>
        </div>
    </div>
)

export default Selection;