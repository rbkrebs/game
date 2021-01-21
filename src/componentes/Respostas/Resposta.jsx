import React from 'react';



import { useSelector } from 'react-redux'



import './Resposta.css';

export default function Resposta({resposta, handleClick}) {

    
    const clicked = useSelector(state => state.clicked_id)


   

    return (


        <li className={clicked === resposta.id ?

            "resposta__opcao_escolhida" : "resposta__opcao"}

            onClick={() => handleClick(resposta.id)}>

            <img src={clicked === resposta.id ? 
            `${process.env.PUBLIC_URL+'../../assets/cenarios/arrowhover.png'}` : 
            `${process.env.PUBLIC_URL+'../../assets/cenarios/arrowdefault.png'}`
            }
            
            alt="seta para direita" />

            {resposta.opcao}

        </li>

    )
}