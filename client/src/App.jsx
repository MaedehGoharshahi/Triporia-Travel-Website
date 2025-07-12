import './App.css'
import Home from './components/Home'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AboutUs from './components/AboutUs'
import Tours from './components/Tours'
import ScrollToTop from './components/ScrollToTop'

function App() {
  

  return (
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/tours" element={<Tours/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
