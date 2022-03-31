import React, {useEffect, useState} from 'react'
import Herodetails from '../components/Herodetails'
import Carddetails from '../components/Carddetails'
import { connect, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import itineraryAction from '../redux/actions/itineraryActions'


const Details = (props) => {

  const [reload,setReload] = useState(false)

  const {id} = useParams()

  const itinerarios = useSelector(store => store.itinerarioReducer.itinerarioCity)

  useEffect(() =>{
    props.fetchItinerarioPorCity(id)
  },[reload])

  return (
    <div>
      {/* <Herodetails/> */}
      {itinerarios.length > 0 ? itinerarios.map(item => <Carddetails data={item} reload={reload} setReload={setReload}/>)
      : <h1 className='noResult'>Please excuse us, no itineraries were found for this city.</h1>
    }
      
    </div>
  )
}

const mapDispatchToProps={
  fetchItinerarioPorCity: itineraryAction.fetchItinerarioPorCity,
}



export default connect(null, mapDispatchToProps)(Details);