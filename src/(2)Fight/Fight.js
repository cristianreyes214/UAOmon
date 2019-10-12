import React from 'react';
import './Fight-style.css';
import Logo from "../Images/uaomon-logo.png";
import charmander from '../Images/charmandersito.png';
import enemy from '../Images/charmander_character.png';
import mycharacter from '../Images/mycharacter.png';

const Fight = () => (
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
            <button className="btn-style">Regresar</button>
            </div>
        </div>

        <div className="fight-content">
            <div className="enemy-content">
                <div className="img-enemy">
                    <img src={enemy} />
                    </div>
                <div className="enemy-target">
                    <div className="selection-style">
                        <img src={charmander} />
                        <p className="text-card">
                        Nombre del personaje
                        <br></br>
                        100 de ataque
                        <br></br>
                        200 de defensa
                        <br></br>
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="myPokemon">
                <div className="img-character">
                    <img src={mycharacter} />
                    </div>
                <div className="myPokemon-target">
                    <div className="statistics-style">
                        <p className="text-card">
                        Nombre del personaje
                        <br></br>
                        100 de ataque
                        <br></br>
                        200 de defensa
                        <br></br>
                        </p>                        
                    </div>
                    <div className="buttons-attack">
                        <button>Ataque 1</button>
                        <button>Ataque 2</button>
                        <button>Ataque 3</button>
                        <button>Ataque 4</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
)

export default Fight;