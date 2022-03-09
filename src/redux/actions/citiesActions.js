import axios from "axios";


const citiesAction = {

    fetchCities: () => {
        return async(dispatch,getState)=>{
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'fetch' ,payload:res.data.response.cities}) 
        }  
    },

    fetchOneCity: (id) =>{
        return async (dispatch,getState) => {
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'fetchOne', payload: res.data.response.cities})


        }
    },
    
    deleteOneCity: (id) =>{
        return async (dispatch,getState) =>{
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'deleteCity', payload: res.data.response.cities})

        }
    },

    filterCities: (cities,value)=>{
        return (dispatch, getState)=>{
            dispatch({type: 'filt', payload: {cities,value } })
        }
    }
    

    



}

export default citiesAction