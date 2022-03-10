import axios from "axios";


const itineraryAction = {

    fetchItinerario: () => {
        return async(dispatch,getState)=>{
            const res = await axios.get('http://localhost:4000/api/V1/itineraries')
            dispatch({type: 'fetchItinerario' ,payload:res.data.response.itinerarios}) 
        }  
    },

    fetchOneItinerario: (id) =>{
        return async (dispatch,getState) => {
            const res = await axios.get('http://localhost:4000/api/V1/itineraries')
            dispatch({type: 'fetchOneItinerario', payload: res.data.response.itinerarios})
        }
    },
    
/*     deleteOneCity: (id) =>{
        return async (dispatch,getState) =>{
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'deleteCity', payload: res.data.response.ciudades})

        }
    }, */
}

export default itineraryAction