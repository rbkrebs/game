import React from 'react';



import VLibras from "@djpfs/react-vlibras";
 


import './Cenario.css';

export default function Cenario({cenario, personagem}){
    
    const figura_cenario = require("../../assets/cenarios/cenariobar.png");
    console.log(`"${cenario}"`)
    return(
        
        <div 
        className="cenario"
        
        style={{
           // backgroundImage:`url(${figura_cenario.default})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
        }}
        > 
        <VLibras />
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