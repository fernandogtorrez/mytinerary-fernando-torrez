import axios from "axios";

const itineraryAction = {

    fetchItinerario: () => {
        return async(dispatch,getState)=>{
            const res = await axios.get('https://mytinerary-torrez-fernando.herokuapp.com/api/itineraries')
            dispatch({type: 'fetchItinerario' ,payload:res.data.response})
        }  
    },

    fetchItinerarioPorCity: (id) => {
        return async (dispatch, getState) => {
            try{
                const res = await axios.get(`https://mytinerary-torrez-fernando.herokuapp.com/api/itineraries/${id}`)
                dispatch({type: 'fetchItinerarioPorCity', payload: res.data.response})
            }catch(err){
                console.log(err);
            }
        }
    },

    fetchItinerarioPorId: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-torrez-fernando.herokuapp.com/api/itineraries/${id}`)
            dispatch({type: 'fetchItinerarioPorId', payload: res.data.response})
        }
    },
    likeDislike:(itineraryId) => {
        const token = localStorage.getItem('token')
        console.log(itineraryId);
        return async () => {
            try{
                let response = await axios.put(`https://mytinerary-torrez-fernando.herokuapp.com/api/likeDislike/${itineraryId}`,{},
                {
                    headers: {
                        Authorization: 'Bearer '+token
                    }
                })
                return response
            }catch(err) {
                console.log(err);
            }
        }
    }
}

export default itineraryAction