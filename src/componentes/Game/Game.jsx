import React from 'react';

import Cenario from '../Cenario/Cenario';
import Botao from '../Botao/Botao';
import Resposta from '../Respostas/Resposta';
import Pergunta from '../Pergunta/Pergunta';
import Premio from '../Premio/Premio'
import { useSelector, useDispatch } from 'react-redux';
import { clickedMouse} from "../../actions"



import './Game.css';




export default function Game({questao}){

    const id = useSelector(state => state.id_pergunta_atual);
    const dispatch = useDispatch();
    const mudaSeta = id => dispatch(clickedMouse(id));

   
while(id<3){
    return(

        

        <div className="game">
             
            <div className="game__bar_top">
            <Pergunta pergunta = {questao[id].Pergunta}/>
            </div>
            <Cenario cenario = {questao[id].url_cenario}
            personagem = {questao[id].url_personagem}/>
            <div className="game__bar_botton">
            <div className="resposta">
                <ul className="resposta__opcoes">

                {
                    questao[id].opcoes.map((opcao)=>{
                   
                        return (
                            
                        <Resposta 
                            resposta = {opcao} 
                            handleClick={mudaSeta}                            
                            
                            />)
                    })

                }
                </ul>
             </div>
               
                <Botao texto="Próximo"/>
            </div>
        </div>
    )
    
}
return(
    <div className="game">
        <div className="game__bar_top"/>
        <Premio/>  
     
        <div className="game__bar_botton">
        <Botao texto="Ver Perfil" />
       
        </div>
           
    </div>
)

    
}