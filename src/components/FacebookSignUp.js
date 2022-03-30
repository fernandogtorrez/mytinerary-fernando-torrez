import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'
import '../styles/styleSign.css'

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
      const fullNameSeparado = res.name.split(" ")
      let nombre = fullNameSeparado[0]
      let apellido = fullNameSeparado[1]

    const userData = {
      firstName: nombre,
      lastName: apellido,
      email: res.email,
      password: res.id,
      userPhoto: res.picture.data.url,
      country: 'hola',
      from: "facebook",
    }
    await props.signUpUser(userData)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" SignUp with Facebook"
      appId="385124233097510"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);