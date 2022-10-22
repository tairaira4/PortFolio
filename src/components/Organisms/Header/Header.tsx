/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './style.css'
import './responsive.css'
import { Link } from 'react-router-dom'

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
          <Link to="about"><div className="lists">ABOUT</div></Link>
          <Link to="about"><div className="lists">FAVORITE</div></Link>
          <Link to="about"><div className="lists" id="header_contact">CONTACT</div></Link>
          
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
            <a href="About">ABOUT</a>
            <a href="Favorite">FAVORITE</a>
            <a href="Contact">CONTACT</a>
          </div>
        </div>
      </>}
    </>
  )
}

export default Header