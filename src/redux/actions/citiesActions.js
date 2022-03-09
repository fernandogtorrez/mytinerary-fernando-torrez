import axios from "axios";


const citiesAction = {

    fetchCities: () => {
        return async(dispatch,getState)=>{
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'fetch' ,payload:res.data.response.ciudades}) 
        }  
    },

    fetchOneCity: (id) =>{
        return async (dispatch,getState) => {
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'fetchOne', payload: res.data.response.ciudades})


        }
    },
    
    deleteOneCity: (id) =>{
        return async (dispatch,getState) =>{
            const res = await axios.get('http://localhost:4000/api/V1/allcities')
            dispatch({type: 'deleteCity', payload: res.data.response.ciudades})

        }
    },

    filterCities: (cities,value)=>{
        return (dispatch, getState)=>{
            dispatch({type: 'filt', payload: {cities,value } })
        }
    }
    

    



}

export default citiesAction