import React from 'react'
import './header.css'
import logo from '../../assets/logo_white.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} />
    </div>
  )
}

export default Header