import React from 'react';
import { useDispatch } from 'react-redux'
import { proximaPergunta } from "../../actions"
import { useSelector } from 'react-redux';

import './Botao.css';

export default function Botao(texto){

    const id = useSelector(state => state.id_pergunta_atual);
    const dispatch = useDispatch();
    const proxima = event => dispatch(proximaPergunta());
    const redirect = event => (window.location = "https://game-e6zamtbwc.vercel.app/");
   
    return(

        <div className="botao">
           <button className="botao__button" 
           onClick = {id < 3 ? proxima: redirect}

           >{texto.texto}</button>
        </div>
    )
}