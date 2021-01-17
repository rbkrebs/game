import React from 'react';
import { useDispatch } from 'react-redux'
import { proximaPergunta } from "../../actions"

import './Botao.css';

export default function Botao(){

    
    const dispatch = useDispatch();
    const proxima = event => dispatch(proximaPergunta());

    return(

        <div className="botao">
           <button className="botao__button" onClick = {proxima}>Próximo</button>
        </div>
    )
}