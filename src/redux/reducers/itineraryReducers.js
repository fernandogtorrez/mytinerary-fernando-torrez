const initialState = {

    itineraries:[],
    itinerarioCity: [],
    aux:[],
}

const itinerarioReducer = (state= initialState, action)=>{

    switch (action.type) {
        case 'fetchItinerario':
            return {
                ...state,
                itineraries: action.payload,
                aux: action.payload,
            }
            case 'fetchOneItinerario':
                return{
                    ...state,
                    itinerarioCity: action.payload,
                    aux: action.payload
                }
        default:
            return state
    }

}

export default itinerarioReducer