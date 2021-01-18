import React from 'react';
import { useSelector } from 'react-redux';



import './Cenario.css';

export default function Cenario(){

    const id = useSelector(state => state.id_pergunta_atual);

    const cenarios = [

        require("../../assets/cenarios/cenariorefeitorio.png"),
        require("../../assets/cenarios/cenariobar.png"),
        require("../../assets/cenarios/cenariorefeitorio.png")

    ]
    const personagens = [

        require("../../assets/personagens/1.png"),
        require("../../assets/personagens/2.png"),
        require("../../assets/personagens/3.png")

    ]


    
    return(
        
        <div 
        className="cenario"
        
        style={{
           backgroundImage: `url(${cenarios[id].default})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
        }}
        > 
       
        <div className="cenario__personagem"
        
        style={{
            backgroundImage:`url(${personagens[id].default})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'botton',
            backgroundSize: '100% auto'
        }}>
       
         
        </div>             
        </div>
        
    )
}