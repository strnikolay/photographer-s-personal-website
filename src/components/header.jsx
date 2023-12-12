import React from 'react'
import "./header.css"

function Header() {
  return (
  <header>
    <input type="checkbox" id="menu-toggle"/>
    <label id="trigger" htmlFor="menu-toggle"></label>
    <label id="burger" htmlFor="menu-toggle"></label>
    <ul id="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    
  </header>
  )
}

export default Header