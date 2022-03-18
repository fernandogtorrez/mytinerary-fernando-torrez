import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import "../styles/login.css";
import {Link as LinkRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import FacebookSignIn from '../components/FacebookSignIn'
import GoogleSignIn from './GoogleSignIn';

const Login = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const logedUser = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: 'form-Signin'
    }
    props.signInUser(logedUser)
    console.log(logedUser)
  }
  return (
    <div className='contain-form2'>
      <div className='contain-form'>
              <form className='formulario' onSubmit={handleSubmit}>
                  <h1>Welcome back!</h1>
                  <div className='cuentas'>
                  <GoogleSignIn/>
                  <FacebookSignIn/>
                  </div>
                  
                  <div className="divide">
                    <span>Or</span>
                  </div>
                  <div className='contenedor-form'>
                      <div className='input-contenedor'>
                        <div className='input-center'>
                          <FontAwesomeIcon className='font-icon' icon={faEnvelope} />
                          <input name='email' type='email' placeholder='Email'/>
                        </div>
                      </div>
                      <div className='input-contenedor'>
                        <div className='input-center'>
                          <FontAwesomeIcon className='font-icon' icon={faKey} />
                          <input name='password' type='password' placeholder='Password'/>
                        </div>
                      </div>
                      <div className='input-btn'>
                          <button className='btn-signin' type='submit'>Sign In</button>
                      </div>
                      <LinkRouter to='/Signup' className='linkresp'>
                        <p>Don't have an account yet?</p>
                      </LinkRouter>
                  </div>
              </form>
        </div>
    </div>
    
  )
}

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
}

export default connect(null, mapDispatchToProps) (Login)