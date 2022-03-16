import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faImage, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import "../styles/login.css";
import {Link as LinkRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'

const Register = (props) => {
    const pais = ['Argentina', 'Chile', 'Peru', 'Brasil']

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            from: 'form-Signup'
        }
        props.signUpUser(userData)
    }

  return (
      <div className='contain-form2'>
          <div className='contain-form'>
            <form className='formulario' onSubmit={handleSubmit}>
                <h1>Welcome to MyTinerary!</h1>
                <div className='contenedor-form'>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faUser} />
                            <input type='text' placeholder='FirstName'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faUser} />
                            <input type='text' placeholder='LastName'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faEnvelope} />
                            <input type='email' placeholder='Email'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faKey} />
                            <input type='password' placeholder='Password'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faImage} />
                            <input type='text' placeholder='URL picture profile'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faEarthAmericas} />
                            <select id='country'>
                                {pais.map(item =>
                                <option>{item}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='input-btn'>
                        <button className='btn-signup' type='submit'>Sign Up</button>
                    </div>
                    <div className='input-btn'>
                        <button className='btn-signup' type='submit'>Sign Up with Google</button>
                    </div>
                    <LinkRouter to='/Signin' className='linkresp'>
                        <p>You have an account yet? Sign in!</p>
                    </LinkRouter> 
                </div>
            </form>
        </div>
      </div>
  )
}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
}
const mapStateToProps = (state) => {
    return {
        message: state.userReducers.message,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Register)