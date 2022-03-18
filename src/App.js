import React, {useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home';
import Cities from './pages/cities';
import Details from './pages/details'
import Signin from './pages/signin';
import Signup from './pages/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Snackbar from './components/Snackbar';
import { connect } from 'react-redux'
import userActions from './redux/actions/userActions';

function App(props) {

  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])

  return (
    <>
    <BrowserRouter>
      <div className="App">
          <Snackbar/>
          <Navbar/>
          <Routes>
            <Route path='*' element={<Home/> }/>
            <Route path='/home' element={<Home/> }/>
            <Route path='/cities' element={<Cities/>}/>
            {!props.user && <Route path='/signin' element={<Signin/>}/>}
            {!props.user && <Route path='/signup' element={<Signup/>}/>}
            <Route path ="/details/:id" element={<Details/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}

const mapStateToProps = (state) => {
  return {
      user: state.userReducers.user,
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

