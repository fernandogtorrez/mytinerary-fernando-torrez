import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/home';
import Cities from './components/cities';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='*' element={<Home/> }/>
            <Route path='/home' element={<Home/> }/>
            <Route path='/cities' element={<Cities/> }/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
