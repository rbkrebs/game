import data from './DataMock/game_mock.json'

const INITIAL_STATE = {
    
    data

}

function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case "VIEW_PRODUCT":
          
            return {
                ...state,
                productSelected: action.payload
            };
       

        default:
            return state;
    }

}

export default reducer;