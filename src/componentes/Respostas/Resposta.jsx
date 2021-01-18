import React from 'react';

import setaDefault from '../../assets/cenarios/arrowdefault.png';
import setaHover from '../../assets/cenarios/arrowhover.png';
import { useDispatch, useSelector } from 'react-redux'



import './Resposta.css';

export default function Resposta({resposta, handleClick}) {

    
    const clicked = useSelector(state => state.clicked_id)

    console.log(clicked)
   

    return (


        <li className={clicked === resposta.id ?

            "resposta__opcao_escolhida" : "resposta__opcao"}

            onClick={() => handleClick(resposta.id)}>

            <img src={clicked === resposta.id ? setaHover : setaDefault}
            
            alt="seta para direita" />

            {resposta.opcao}

        </li>

    )
}