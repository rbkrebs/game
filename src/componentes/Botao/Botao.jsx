import React from 'react';
import { useDispatch } from 'react-redux'
import { proximaPergunta } from "../../actions"

import './Botao.css';

export default function Botao(texto){

    
    const dispatch = useDispatch();
    const proxima = event => dispatch(proximaPergunta());
    console.log(texto)
    return(

        <div className="botao">
           <button className="botao__button" onClick = {proxima}>{texto.texto}</button>
        </div>
    )
}