import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />}  />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default App
