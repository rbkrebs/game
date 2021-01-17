import React from 'react';



import './Resposta.css';

export default function Resposta(opcoes){
  
    return(

        <div className="resposta">
            <ul>

            {opcoes.respostas.map((opcao) => {

            return(<li>{opcao.opcao}</li>)
            })}
                
                </ul>  
        </div>
    )
}