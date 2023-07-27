import { Link } from 'react-router-dom'
import '../pages/Main.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">
        <Link to="/">SnapFolio</Link>
      </span>
      <ul className="links">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Gallary">Gallary</Link>
        </li>
        
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/References">References</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
