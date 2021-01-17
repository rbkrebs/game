import React from 'react';

import Cenario from '../Cenario/Cenario';
import Botao from '../Botao/Botao';
import Resposta from '../Respostas/Resposta';
import Pergunta from '../Pergunta/Pergunta';
import { useSelector } from 'react-redux';


import './Game.css';




export default function Game({questao}){

    const id = useSelector(state => state.id_pergunta_atual);
   
while(id<3){
    return(

        

        <div className="game">
            <div className="game__bar_top">
            <Pergunta pergunta = {questao[id].Pergunta}/>
            </div>
            <Cenario cenario = {questao[id].url_cenario}
            personagem = {questao[id].url_personagem}/>
            <div className="game__bar_botton">
                <Resposta respostas = {questao[id].opcoes}/>
                <Botao/>
            </div>
        </div>
    )
}

    
}