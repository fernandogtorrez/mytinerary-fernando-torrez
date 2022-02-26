import React from 'react'
import '../styles/cities.css'
import Card from './Cards'
import Herocities from './Herocities'
import Input from './input'

const Cities = () => {
  return (
    <div className='cities'>
      <Herocities/>
        <Input/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Cities