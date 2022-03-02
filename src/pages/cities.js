import React from 'react'
import '../styles/cities.css'
import Cards from '../components/Cards'
import Herocities from '../components/Herocities'

const Cities = () => {
  return (
    <div className='cities'>
      <Herocities/>
        <Cards/>
    </div>
  )
}

export default Cities