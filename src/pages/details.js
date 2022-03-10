import React, {useEffect} from 'react'
import Herodetails from '../components/Herodetails'
import Carddetails from '../components/Carddetails'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {citiesAction} from '../redux/actions/citiesActions'
import itineraryAction from '../redux/actions/itineraryActions'

const Details = (props) => {

  
  return (
    <div>
      <Herodetails/>
      <Carddetails/>
    </div>
  )
}

const mapDispatchToProps = {
  
  fetchCities: citiesAction.fetchCities,
  fetchOneCity: citiesAction.fetchOneCity,
  fetchItinerarios: itineraryAction.fetchItinerario,
  fetchOneItinerario: itineraryAction.fetchOneItinerario,

  }

  const mapStateToProps = (state) =>{

  return {
    cities: state.citiesReducer.cities,
    city : state.citiesReducer.city,
    itinerarioCity: state.itineraryReducer.itinerarioCity
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Details);