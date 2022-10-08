import React, { useEffect, useRef } from 'react'
import HomeMypage from '../../../photoImage/homeMypage.png'
import HomeFavorite from '../../../images/LOL.png'
import './style.css'
import './responsive.css'
import { Link } from 'react-router-dom'


const PageIndex = () => {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    screenRef.current!.onwheel = (e) => {
      e.preventDefault()
      let delta = (e.deltaY/ Math.abs(e.deltaY)) *window.innerWidth
        console.log('delta', delta)
        console.log('e.deltaY', e.deltaY)
        console.log('window', window.innerWidth)
      if (delta > 0) {
        delta += screenRef.current!.scrollLeft
        delta = Math.floor(delta / window.innerWidth) * window.innerWidth
      } else {
        delta += screenRef.current!.scrollLeft
        delta = Math.ceil(delta / window.innerWidth) * window.innerWidth
      }
    screenRef.current!.scrollLeft = delta
    }
  },[])

  return (
    <div>
      <div className="screen" ref={screenRef}>
        <div className="container">
          <div className="page1">
            <div className="page1_text">
              <div className="h1">Welcome My Portfolio</div>
            </div>
          </div>
          <div className="page2">
            <div className="home_links">
              <div className="home_link">
                <Link to="/PortFolio/About">
                  <div className="image_link1">
                    <img src={HomeMypage} alt="" />
                  </div>
                </Link>
              </div>
              <div className="home_link">
                <a href="Favorite" className="image_link2">
                  <img src={HomeFavorite} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="page3">
            <div className="home_links">
              <div className="home_link">
                <a href="Contact" className="image_link3">
                  <img src={HomeMypage} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageIndex