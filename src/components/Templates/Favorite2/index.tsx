import React from 'react'
import Footer from '../../Organisms/Footer/Footer'
import Header from '../../Organisms/Header/Header'
import Favorite2 from '../../Organisms/Favorite2/Favorite2'
import './style.css'



const PageIndex = () => {
  return (
    <>
      <Header />
      <div id="A">
        <Favorite2/>
      </div>
      <Footer />
    </>
  )
}

export default PageIndex