const initialState = {
    activities: [],
    activitisItinerary: [],
}

const activitiesReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'fetchActivities':
            return{
                ...state,
                activities: action.payload,
            }
        case 'fetchActivitiesItineraryId':
            return{
                ...state,
                activitisItinerary: action.payload,
                }
        default:
            return state
    }
}

export default activitiesReducer