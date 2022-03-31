import React from 'react'
import "../styles/visita.css";
import {Link as LinkRouter} from 'react-router-dom'

const Visita = () => {
  return (
    <div>
       <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="/images/viaje.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">MyTinerary</h1>
              <p className="lead fw-bold">Find your perfect trip, designed by insiders who know and love their cities!</p>
              <p className="lead fw-bold">No matter where do you want to go, we can help you there.</p>
              <p className="lead fw-bold">We maximize your vacation experience just in the right way.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <LinkRouter to='/Cities' className='linkresp'>
                  <button type="button" className="cssbuttons-io-button">
                    <div className="icon">
                      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                    </div>
                    Cities
                    </button>
                  </LinkRouter>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Visita
