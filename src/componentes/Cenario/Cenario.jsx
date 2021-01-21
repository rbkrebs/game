import React from 'react';
import { useSelector } from 'react-redux';



import './Cenario.css';

export default function Cenario(){

    const id = useSelector(state => state.id_pergunta_atual);
    const cenarios = useSelector(state => state);

   
        
    return(
        
        <div 
        className="cenario"
       
        > 

        <img src={process.env.PUBLIC_URL+`${cenarios.data.questoes[id]
        .url_cenario}`}
         alt={cenarios.data.questoes[id].local}
         className="cenario__picture"/>

        <img src={process.env.PUBLIC_URL+`${cenarios.data.questoes[id]
        .url_personagem}`}
         alt={cenarios.data.questoes[id].local}
         className="cenario__personagem"/>
       
        
       
           
        </div>
        
    )
}