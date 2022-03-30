import React, { useEffect, useState } from 'react'
import '../styles/herodetails.css'
import {connect} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
import { useParams } from 'react-router-dom';



const Herodetails = (props) => {

  const [reload, setReload] = useState(false)
  const {id} = useParams()

  /* useEffect(()=>{
    setReload(!reload)
  },[])

  useEffect(()=>{
    props.fetchOneCity(id)
  },[reload])
   */
  return (
    <div className='herodetails-container' style={{backgroundImage:`url('${process.env.PUBLIC_URL}/images/${props.data?.image}')` }}>
        <div className='titledetails'>
            <h1>{props.data?.cities}</h1>
        </div>
    </div>
  )
}

const mapDispatchToProps={
  fetchOneCity: citiesActions.fetchOneCity,
}

const mapStateToProps = (state) =>{
  
  return{
    data: state.citiesReducer.city
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Herodetails);