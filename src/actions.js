export function proximaPergunta(){   

    
    return{

        type: "PROXIMA_PERGUNTA",
        
    }
}

export function clickedMouse(id){


   console.log(id)

   

    return{

        type: "ESCOLHE_RESPOSTA",
        payload: id
        
    }

}

export function respostaEscolhida(){

   

    return{

        type: "ESCOLHE_RESPOSTA_FINAL",
        
    }

}