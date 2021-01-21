import React from 'react';
import criatividade from '../../assets/softskills/criatividade.png'
import resolucaodeproblemas from '../../assets/softskills/resolucaodeproblemas.png'
import pensamentocritico from '../../assets/softskills/pensamentocritico.png'



 


import './Premio.css';

export default function Premio(){
    
  
    
    return(
        <div 
        className="premio">
           <p className="premio__mensagem">Parabéns, você foi excelente! Você ganhou muitos pontos! Continue se capacitando...</p>
           <div className="premio__badges">
            <div className="premio__badge">
                <img src={process.env.PUBLIC_URL+pensamentocritico}
                 alt= {`badget de ${pensamentocritico}`}></img>
                <span>Pensamento crítico</span>
                <span>3000 pontos</span>
            </div>
            
            <div className="premio__badge">
                <img src={process.env.PUBLIC_URL+resolucaodeproblemas}
                alt= {`badget de ${resolucaodeproblemas}`}></img>
                <span>Resolução de problema</span>
                <span>1505 pontos</span>
            </div>
            <div className="premio__badge">
                <img src={process.env.PUBLIC_URL+criatividade}
                 alt= {`badget de ${criatividade}`}></img>
                <span>Criatividade</span>
                <span>4620 pontos</span>
            </div>  
           </div>      
            
       </div>
        
 
       
       
        
    )
}