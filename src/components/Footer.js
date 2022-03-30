import React from 'react'
import '../styles/footer.css'
import {Link as LinkRouter} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img className='logo-footer' src='/images/logo.png' />
            </div>
            <p>Copyright © Fernando Torrez | Mytinerary | 2022</p>
            <ul className="nav col-md-4 justify-content-end">
            <LinkRouter to='/Home' className='linkresp'> <li className="nav-item"><div className="nav-link px-2 text-muted">Home</div></li></LinkRouter>
            <LinkRouter to='/Cities' className='linkresp'> <li className="nav-item"><div className="nav-link px-2 text-muted">Cities</div></li></LinkRouter>
            </ul>
            </footer>
        </div>
    </div>
  )
}

export default Footer