import React, {useEffect} from 'react'
import Herodetails from '../components/Herodetails'
import Carddetails from '../components/Carddetails'
import { connect, useSelector, useDispatch } from 'react-redux'
import itinerarioReducer from '../redux/reducers/itineraryReducers'
import { useParams } from 'react-router-dom'
import itineraryAction from '../redux/actions/itineraryActions'


const Details = (props) => {

  const {id} = useParams()
  console.log(id);

  const dispatch = useDispatch()
  const itinerarios = useSelector(store => store.itinerarioReducer.itinerarioCity)
  console.log(itinerarios);

  useEffect(() =>{
    dispatch(itineraryAction.fetchItinerarioPorCity(id))
  },[])

  return (
    <div>
      <Herodetails/>
      {itinerarios.length > 0 ? itinerarios.map(item => <Carddetails data={item}/>)
      : <h1 className='noResult'>Please excuse us, no itineraries were found for this city.</h1>
    }
      
    </div>
  )
}

export default Details;