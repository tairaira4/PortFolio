import React from 'react'
import Me from '../../../photoImage/me.png'
import './style.css'

const Introduce = () => {
  return (
    <>
      <div className="wrapper">
        <div className="image_container">
          <img className="me_image" src={Me}/>
        </div>
        <div className="content">
          <h3 className="introduction_title">aaaaaaaa</h3>
          <div className="description">222222222</div>
        </div>
      </div>
    </>
  )
}

export default Introduce