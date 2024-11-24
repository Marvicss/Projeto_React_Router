import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Vagas from './pages/Vagas'

function App() {
  return (
    <Router>
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />}  />
      <Route path="/login" element={<Login />} />
      <Route path="/vagas" element={<Vagas />} />
      
    </Routes>
  </Router>
  )
}

export default App
