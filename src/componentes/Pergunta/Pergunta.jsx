import React from 'react';



import './Pergunta.css';

export default function Pergunta(pergunta){
   
    return(
        
        <div className="pergunta">
            <p>{pergunta.pergunta}</p>    
        </div>
    )
}