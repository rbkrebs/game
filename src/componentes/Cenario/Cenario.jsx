import React from 'react';



import './Cenario.css';

export default function Cenario({cenario, personagem}){
    
    //const figura_cenario = require("../../assets/cenarios/cenariobar.png");
    
    return(
        
        <div 
        className="cenario"
        
        style={{
           backgroundImage:`url(${cenario})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
        }}
        > 
       
        <div className="cenario__personagem"
        
        style={{
            backgroundImage:`url(${personagem})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'botton',
            backgroundSize: '100% auto'
        }}>
       
         
        </div>             
        </div>
        
    )
}