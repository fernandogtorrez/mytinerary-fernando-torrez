import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faImage, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import "../styles/login.css";
import {Link as LinkRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'
import FacebookSignUp from './FacebookSignUp';
import GoogleSignUp from './GoogleSignUp';

const Register = (props) => {
    const countries = ["United States", "England", "Peru", "Canada", "New Zealand", "Brasil", "China", "Argentina", "Chile", "Other" ]
    console.log(props)



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        const userData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            userPhoto: event.target[4].value,
            country: event.target[5].value,
            from: 'form-Signup'
        }
        props.signUpUser(userData)
        console.log(userData)
    }
    

  return (
      <div className='contain-form2'>
          <div className='contain-form'>
            <form className='formulario' onSubmit={handleSubmit}>
                <h1>Welcome to MyTinerary!</h1>
                <div className='cuentas'>
                    <GoogleSignUp/>
                    <FacebookSignUp/>
                </div>
                  
                <div className="divide">
                    <span>Or</span>
                </div>
                <div className='contenedor-form'>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faUser} />
                            <input name='firstName' type='text' placeholder='FirstName'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faUser} />
                            <input name='lastName' type='text' placeholder='LastName'/>
                        </div>
                    </div>
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
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faImage} />
                            <input name='userPhoto' type='text' placeholder='URL picture profile'/>
                        </div>
                    </div>
                    <div className='input-contenedor'>
                        <div className='input-center'>
                            <FontAwesomeIcon className='font-icon' icon={faEarthAmericas} />
                            <select name='country' id='country'>
                            {countries.map(item => 

                                <option value="{countries}"> {item} </option>

                            )} 
                            </select>
                        </div>
                    </div>
                    <div className='input-btn'>
                        <button className='btn-signup' type='submit'>Sign Up</button>
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