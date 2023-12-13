import React from 'react'
import "./header.css"

function Header() {
  return (
  <header>
    <input type="checkbox" id="menu-toggle"/>
    <label id="trigger" htmlFor="menu-toggle"></label>
    <label id="burger" htmlFor="menu-toggle"></label>
    <ul id="menu">
      <li><a href="#">Главная</a></li>
      <li><a href="#">Портфолио</a></li>
      <li><a href="#">Цены</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
    
  </header>
  )
}

export default Header