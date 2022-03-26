import axios from "axios"

const activitiesActions =  {
  fetchActivities: () => {
      return async(dispatch, getState) => {
          const res = await axios.get('http://localhost:4000/api/V1/activities')
          dispatch({type:'fetchActivities', payload: res.data.response})
      }
  },
  fetchActivitiesItineraryId: () => {
      return async(dispatch, getState) => {
          const res = await axios.get(`http://localhost:4000/api/V1/activities/${id_itinerary}`)
          dispatch({type:'fetchActivitiesItineraryId', payload: res.data.response})
      }
  }
}

export default activitiesActions