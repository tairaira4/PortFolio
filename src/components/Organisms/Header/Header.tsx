/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import './responsive.css'

const Header = () => {
    const [displayFlg,setDisplayFlg] = useState(true)

    const handleClick = () => {
    setDisplayFlg(!displayFlg)
  }
  return (
    <>
    {displayFlg  ? 
      // trueMenu
      <div className="header">
        <a className="header-logo" href="./">
        My Portfolio
        </a>
          <div className="hamburger-menu">
            <input type="checkbox" id="menu-btn-check"/>
            <label htmlFor="menu-btn-check" className="menu-btn" onClick={() => {handleClick()}}><span></span></label>
          </div>
        <nav className="header-list">
          <Link to="/about" className="lists">ABOUT</Link>
          <Link to="/favorite" className="lists">FAVORITE</Link>
          <Link to="/contact" className="lists" id="header_contact">CONTACT</Link>
        </nav>
      </div>
      :
      // falseMenu
      <>
        <div id="all-menu">
          <a className="header-logo2" href="./">
          My Portfolio
          </a>
          <input type="checkbox" id="menu-btn-check"/>
          <label htmlFor="menu-btn-check" className="menu-btn2" onClick={() => {handleClick()}}><span></span></label>
          <div id="false-menu">
            <Link to="/about" className="lists">ABOUT</Link>
            <Link to="/favorite" className="lists">FAVORITE</Link>
            <Link to="/contact" className="lists">CONTACT</Link>
          </div>
        </div>
      </>}
    </>
  )
}

export default Header