import React from 'react'
import './header.css'
import logo from '../../assets/logo_white.png'
import cart from '../../assets/bag.png'
import star from '../../assets/star.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} />
      <input type="text" className='search' />
      <img src={star} className="star" alt="star" />
      <div className='cart'>
        <span>00</span>
        <img  src={cart} />
      </div>

    </div>
  )
}

export default Header