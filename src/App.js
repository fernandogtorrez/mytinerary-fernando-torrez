import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home';
import Cities from './pages/cities';
import Details from './pages/details'
import Signin from './pages/signin';
import Signup from './pages/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='*' element={<Home/> }/>
            <Route path='/home' element={<Home/> }/>
            <Route path='/cities' element={<Cities/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path ="/details/:id" element={<Details/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
