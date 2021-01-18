import data from './DataMock/game_mock.json'

const INITIAL_STATE = {
    
    data,
    id_pergunta_atual : 0,
    clicked_id: 0


}

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case "PROXIMA_PERGUNTA":
          
            return {
                ...state,
                id_pergunta_atual: state.id_pergunta_atual+1,
                clicked_id: 0
            };

            case "ESCOLHE_RESPOSTA":
          
                return {
                    ...state,
                    clicked_id: action.payload
                };         

         

        default:
            return state;
    }

}

export default reducer;