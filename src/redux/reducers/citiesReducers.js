const initialState = {

    cities:[],
    city: [],
    aux:[],
    filtrandoCities:[]
}

const citiesReducer = (state= initialState, action)=>{

    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                cities: action.payload,
                aux: action.payload,
                filtrandoCities: action.payload
            }
            case 'deleteCity':
                return {
                    ...state,
                    cities: action.payload,
                }
    
            case 'loadCity':
                let cities = [...state.cities]
                cities.push(action.payload)
                return {
                    ...state,
                    cities,
                    aux:[...cities]
                }
    
            case 'filter':
                const filtered = action.payload.cities.filter((city => city.cities.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))
    
                return{
                    ...state,
                    filtrandoCities: filtered
                }
            case 'fetchOne':
                return{
                    ...state,
                    city: action.payload
                }
        default:
            return state
    }

}

export default citiesReducer