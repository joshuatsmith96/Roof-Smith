//Dependencies
import './App.css'
import { Routes, Route } from 'react-router-dom'

//Import Components
import Navigation from './components/Nav/Nav'

//Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
