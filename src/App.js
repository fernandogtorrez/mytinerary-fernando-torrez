import './App.css';
import Carrousel from './components/Carrousel'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Visita from './components/visita';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Visita/>
      <Carrousel/>
      
    </div>
  );
}

export default App;
