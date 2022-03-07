import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home';
import Cities from './pages/cities';
import Details from './pages/details'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='*' element={<Home/> }/>
            <Route path='/home' element={<Home/> }/>
            <Route path='/cities' element={<Cities/>}/>
            <Route path ="/details/:id" element={<Details/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
