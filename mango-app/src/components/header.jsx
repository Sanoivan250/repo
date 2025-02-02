import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}
