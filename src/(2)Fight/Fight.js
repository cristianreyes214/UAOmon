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
            <button className="btn-style">Cancelar</button>
            </div>
        </div>

        <div className="fight-content">
            <b><p className="text-fight-content">Batalla</p></b>
            <div className="enemy-content">
                <div className="img-enemy">
                    <img src={enemy} />
                    </div>
                <div className="enemy-target">
                    <div className="fight-style-target">
                        <img src={charmander} /><b>
                            <br></br>
                            <br></br>
                        Nombre del personaje
                        <br></br>
                        100 de ataque
                        <br></br>
                        200 de defensa
                        <br></br>
                        <br></br>
                        <div id="life-bar">
                            <div id="percentage"></div>
                        </div>
                        </b>
                        
                    </div>
                </div>
            </div>
            <div className="myPokemon">
                
                <div className="myPokemon-target">
                <div className="img-character">
                    <img src={mycharacter} />
                    </div>
                    <div className="statistics-style">
                        <h3>Nombre del personaje</h3>
                        <b>
                        100 de ataque
                        <br></br>
                        200 de defensa
                        <br></br> 
                        <br></br> 
                        <div id="life-bar">
                            <div id="percentage"></div>
                        </div>
                        </b>                      
                    </div>
                    <div className="buttons-attack">
                        <button><b>Ataque 1</b></button>
                        <button><b>Ataque 2</b></button>
                        <button><b>Ataque 3</b></button>
                        <button><b>Ataque 4</b></button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
)

export default Fight;