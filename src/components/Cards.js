import React from 'react'
import "../styles/card.css";

const Cards = () => {
  return (
      <div>
        <div className='body'>
            <div className='carta'>
                <div className='img-sec'></div>
                    <div className='info'>
                        <h1 className='title-carta'>Argentina</h1>
                        <h2 className='title-carta'>Buenos Aires</h2>
                        <p className='parrafo-carta'>Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace.</p>
                        <div className='btn-enviar'>
                            <button>See more</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Cards