import {Routes,Router,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Routes path="/home" element={<Home/>}/>
          <Routes path="/about" element={<About/>}/>
          <Routes path="/services" element={<Services/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
