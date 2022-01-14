import React from "react";
import './Header.css'

export default function Header() {
  return(
  <div className='header-parent'>
    <span className='email'>ryangolf@email.com</span>
    <div className='menu-button'>
      <span className="material-icons menu-icon">menu</span>
      <div>MENU</div>
    </div>
    <div className='title'>CoachErik.app</div>
  </div>
  )
  }