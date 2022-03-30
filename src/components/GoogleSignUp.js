import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'
import '../styles/styleSign.css'

function GoogleSignUp(props) {

  const responseGoogle = async (res) => {
    const userData = {
      firstName: res.profileObj.givenName + " " + res.profileObj.familyName,
      lastName: res.profileObj.givenName + " " + res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      userPhoto: res.profileObj.imageUrl,
      from: "google",
      country:'Argenzuela'
    }
    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
      buttonText="SignUp with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}
const mapStateToProps = (state) => {
  return {
      user: state.userReducers.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignUp);