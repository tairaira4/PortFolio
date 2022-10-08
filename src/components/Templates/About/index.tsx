// import GoogleMaps from '../../Organisms/GoogleMaps/GoogleMaps'
import React from 'react'
import Header from '../../Organisms/Header/Header'
import Main from '../../Organisms/Main/Main'
import Footer from '../../Organisms/Footer/Footer'
import { WeatherData } from '../../../types/weather'
import './style.css'
import Header2 from '../../Organisms/Header2/Header2'

interface Props {
  data: WeatherData
}

const PageIndex:React.FC<Props> = ({ data }) => {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <div>
        <Main data={data}/>
      </div>
      <Footer />
    </>
  )
}

export default PageIndex