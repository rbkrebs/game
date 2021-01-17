import React from 'react';
import personagem from '../../assets/personagens/1.png'


import './Personagem.css';

export default function Personagem(){

    return(
        <img className="personagem"
        
        src={personagem}

        alt="teste"
        >
               
        </img>
        
    )
}