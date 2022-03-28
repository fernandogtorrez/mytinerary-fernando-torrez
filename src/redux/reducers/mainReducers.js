import { combineReducers } from "redux";
import citiesReducer from './citiesReducers'
import itinerarioReducer from "./itineraryReducers";
import userReducers from './userReducers'
import activitiesReducers from './activitiesReducers'

const mainReducer = combineReducers({

    citiesReducer,
    itinerarioReducer,
    userReducers,
    activitiesReducers

})

export default mainReducer