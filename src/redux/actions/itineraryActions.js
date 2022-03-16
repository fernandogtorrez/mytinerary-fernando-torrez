import axios from "axios";

const itineraryAction = {

    fetchItinerario: () => {
        return async(dispatch,getState)=>{
            const res = await axios.get('http://localhost:4000/api/V1/itineraries')
            dispatch({type: 'fetchItinerario' ,payload:res.data.response})
            console.log(res.data);
        }  
    },

    fetchItinerarioPorCity: (id) => {
        return async (dispatch, getState) => {
            try{
                const res = await axios.get(`http://localhost:4000/api/V1/itineraries/${id}`)
                dispatch({type: 'fetchItinerarioPorCity', payload: res.data.response})
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        }
    },

    fetchItinerarioPorId: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/V1/itineraries/${id}`)
            dispatch({type: 'fetchItinerarioPorId', payload: res.data.response})
        }
    }
}

export default itineraryAction