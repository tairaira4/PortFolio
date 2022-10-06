import React from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import './style.css'
import './responsive.css'
const center = {lat: 35.507430, lng: 139.40801}

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGKsV_rrnY3wnVW0QVKYf5ZZGd--Hj1J4" as string,
  })

  if(!isLoaded) return <div>Loading...</div>


  return (
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="map"
      >
      <Marker
        position={center}
      />
      </GoogleMap>
  )
}

export default GoogleMaps