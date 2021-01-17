import React from 'react';

import Cenario from '../Cenario/Cenario';
import Botao from '../Botao/Botao';
import Resposta from '../Respostas/Resposta';
import Pergunta from '../Pergunta/Pergunta';



import './Game.css';



export default function Game({questao}){
   
    return(

        <div className="game">
            <div className="game__bar_top">
            <Pergunta pergunta = {questao[0].Pergunta}/>
            </div>
            <Cenario cenario = {questao[0].url_cenario}
            personagem = {questao[0].url_personagem}/>
            <div className="game__bar_botton">
                <Resposta respostas = {questao[0].opcoes}/>
                <Botao/>
            </div>
        </div>
    )
}