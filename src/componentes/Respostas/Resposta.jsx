import React from 'react';



import './Resposta.css';

export default function Resposta(opcoes){
  
    return(

        <div className="resposta">
            <ul className="resposta__opcoes">

            {opcoes.respostas.map((opcao) => {

            return(<li key={opcao.id} className="resposta__opcao">{opcao.opcao}</li>)
            })}
                
                </ul>  
        </div>
    )
}