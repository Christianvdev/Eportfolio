import './App.css'
import LandingContent from './components/LandingContent.jsx'
import AboutContent from './components/AboutContent.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/ContactContent.jsx'

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path='' element={<LandingContent />} />
      <Route path='/About' element={<AboutContent />}/>
      <Route path='/Projects' element={<Projects />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
  )
}

export default App
