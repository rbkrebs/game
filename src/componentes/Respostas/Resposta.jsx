import React from 'react';

import setaDefault from '../../assets/cenarios/arrowdefault.png';
import setaHover from '../../assets/cenarios/arrowhover.png';
import { useDispatch, useSelector } from 'react-redux'
import { clickedMouse } from "../../actions"


import './Resposta.css';

export default function Resposta(opcoes) {

    const dispatch = useDispatch();
    const clicked = useSelector(state => state.clicked)
    const mudaSeta = event => dispatch(clickedMouse());

    console.log(clicked)

    return (

        <div className="resposta">
            <ul className="resposta__opcoes">

                {opcoes.respostas.map((opcao) => {

                    return (
                                                   
                            <li key={opcao.id} className="resposta__opcao"
                             onMouseOver={mudaSeta}
                              onClick={mudaSeta}>

                            <img src={clicked ? setaHover : setaDefault } alt="seta para direita" />

                                {opcao.opcao}

                            </li>)
                      
                })}

            </ul>
        </div>
    )
}