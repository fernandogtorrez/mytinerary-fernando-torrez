import React from 'react'
import Herodetails from '../components/Herodetails'
import Carddetails from '../components/Carddetails'
import {useParams} from 'react-router-dom'

const Details = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      <Herodetails/>
      <Carddetails/>
    </div>
  )
}

export default Details