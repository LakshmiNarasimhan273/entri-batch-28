import React from 'react'

import Button from './Button';
import "./navbar.css";

function Navbar() {
  return (
    <nav className="container">
        <a style={{color: "white"}} href="">Home</a>
        <a href="">About</a>
        <a href="">Profile</a>
        <Button />
    </nav>
  )
}

export default Navbar;