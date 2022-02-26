import React from 'react'
import "../styles/visita.css";
import {Link as LinkRouter} from 'react-router-dom'

const Visita = () => {
  return (
    <div>
       <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="/images/viaje.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">MyTinerary</h1>
              <p class="lead fw-bold">Find your perfect trip, designed by insiders who know and love their cities!</p>
              <p class="lead fw-bold">No matter where do you want to go, we can help you there.</p>
              <p class="lead fw-bold">We maximize your vacation experience just in the right way.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <LinkRouter to='/Cities' className='linkresp'><button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Cities</button></LinkRouter>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Visita
