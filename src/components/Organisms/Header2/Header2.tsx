import React, { useState } from 'react'

const Header2 = () => {
  const [displayFlg,setDisplayFlg] = useState(true)

  const handleClick = () => {
  setDisplayFlg(!displayFlg)
}
  return (
    <>
      <div className={displayFlg ? "header":"all-menu"} >
        <a className="header-logo" href="./">
        My Portfolio
        </a>
          <div className="hamburger-menu">
            <input type="checkbox" id="menu-btn-check"/>
            <label htmlFor="menu-btn-check" className={displayFlg ? "menu-btn":"menu-btn2"} onClick={() => {handleClick()}}><span></span></label>
          </div>
        <nav className="header-list">
          <a href="About">ABOUT</a>
          <a href="Favorite">FAVORITE</a>
          <a href="Contact" id="header_contact">CONTACT</a>
        </nav>
      </div>
    </>
  )
}

export default Header2