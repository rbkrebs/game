import React from 'react';




 


import './Premio.css';

export default function Premio(){
    
  
    
    return(
        <div 
        className="premio">
           <p className="premio__mensagem">Parabéns, você foi excelente! Você ganhou muitos pontos! Continue se capacitando...</p>
           <div className="premio__badges">
            <div className="premio__badge">
                <img src={`${process.env.PUBLIC_URL+
                '../../assets/softskills/pensamentocritico.png'}`}
                 alt= "badget de pensamento crítico"></img>
                <span>Pensamento crítico</span>
                <span>3000 pontos</span>
            </div>
            
            <div className="premio__badge">
            <img src={`${process.env.PUBLIC_URL+
            '../../assets/softskills/resolucaodeproblemas.png'}`}
                alt= "badget de resolução de problema"></img>
                <span>Resolução de problema</span>
                <span>1505 pontos</span>
            </div>
            <div className="premio__badge">
            <img src={`${process.env.PUBLIC_URL+
            '../../assets/softskills/criatividade.png'}`}
                 alt= "badget de criatividade"></img>
                <span>Criatividade</span>
                <span>4620 pontos</span>
            </div>  
           </div>      
            
       </div>
        
 
       
       
        
    )
}