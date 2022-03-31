import axios from "axios"

const activitiesActions =  {
  fetchActivities: () => {
      return async(dispatch, getState) => {
          const res = await axios.get('https://mytinerary-torrez-fernando.herokuapp.com/api/V1/activities')
          dispatch({type:'fetchActivities', payload: res.data.response})
      }
  },
  fetchActivitiesItineraryId: (iditinerary) => {
      return async() => {
          try{
            const res = await axios.get(`https://mytinerary-torrez-fernando.herokuapp.com/api/V1/activities/${iditinerary}`)
            return {success:true, response: res.data.response}
          }catch(err){
            console.log(err);
          }
      }
  }
}

export default activitiesActions