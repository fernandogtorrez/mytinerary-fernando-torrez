import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home';
import Cities from './pages/cities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState,state, useEffect} from 'react';
import axios from 'axios'

function App() {
  /* const [input, setInput] = useState()
  const [apidata, setApiData] = useState([])

  useEffect(()=>{
  axios.get(`http://localhost:4000/api/V1/allcities`)
  .then(response => console.log(response.data.response.ciudades))
  },[]) */
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='*' element={<Home/> }/>
            <Route path='/home' element={<Home/> }/>
            <Route path='/cities' element={<Cities/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
