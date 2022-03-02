import React from 'react'
import '../styles/cities.css'
import Cards from './Cards'
import Herocities from './Herocities'
/* import Input from './input' */

const Cities = () => {
  return (
    <div className='cities'>
      <Herocities/>
        <Cards/>
    </div>
  )
}

export default Cities