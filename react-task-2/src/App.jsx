
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Navbar";
import Home from './Home'


import About from './About'
import Contact from './Contact'


function App() {
  return (
    <>

<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>





    </>
  )
}
export default App