import React from 'react';
import criatividade from '../../assets/softskills/criatividade.png'
import resolucaodeproblemas from '../../assets/softskills/resolucaodeproblemas.png'
import pensamentocritico from '../../assets/softskills/pensamentocritico.png'



 


import './Premio.css';

export default function Premio(){
    
  
    
    return(
        <div 
        className="premio">
           <p className="premio__mensagem">Parabéns, você foi excelente! Você ganhou muito pontos! Continuem se capacitando...</p>
           <div className="premio__badges">
            <div className="premio__badge">
                <img src={pensamentocritico}></img>
                <span>Pensamento crítico</span>
                <span>3000 pontos</span>
            </div>
            
            <div className="premio__badge">
                <img src={resolucaodeproblemas}></img>
                <span>Resolução de problema</span>
                <span>1505 pontos</span>
            </div>
            <div className="premio__badge">
                <img src={criatividade}></img>
                <span>Criatividade</span>
                <span>4620 pontos</span>
            </div>  
           </div>      
            
       </div>
        
 
       
       
        
    )
}