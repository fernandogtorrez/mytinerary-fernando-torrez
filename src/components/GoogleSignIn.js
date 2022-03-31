import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'
import '../styles/styleSign.css'

function GoogleSignIn(props) {

  const responseGoogle = async (res) => {
     const logedUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google"
    }
    await props.signInUser(logedUser)
  }

  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="496816844626-eod15mm2u885lmlfe6kq985mk6dtukso.apps.googleusercontent.com"
      buttonText=" with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
    signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn);