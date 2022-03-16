import { combineReducers } from "redux";
import citiesReducer from './citiesReducers'
import itinerarioReducer from "./itineraryReducers";
import userReducers from './userReducers'

const mainReducer = combineReducers({

    citiesReducer,
    itinerarioReducer,
    userReducers

})

export default mainReducer