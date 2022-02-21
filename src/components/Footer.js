import React from 'react'
import '../styles/footer.css'
import {Link as LinkRouter} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-muted">MyTinerary</p>
            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img className='logo-footer' src='/imagenes/logo.png' />
            </a>
            <ul class="nav col-md-4 justify-content-end">
            <LinkRouter to='Home' className='linkresp'> <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li></LinkRouter>
            <LinkRouter to='Cities' className='linkresp'> <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Cities</a></li></LinkRouter>
            </ul>
            </footer>
        </div>
    </div>
  )
}

export default Footer