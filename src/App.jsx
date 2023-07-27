import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallary from './pages/Gallary'
import About from './pages/About'
import Contact from './pages/Contact'
import References from './pages/References'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/References" element={<References/>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
