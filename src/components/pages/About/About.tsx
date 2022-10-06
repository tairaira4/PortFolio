import React, { useEffect, useState } from 'react'
import PageIndex from '../../Templates/About'


const About = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=SAGAMIHARA&appid=596de78e141b7045c2c13fa7fb3d0109&units=metric")
    .then(res => res.json())
    .then(result => {
      setData(result)
      setLoading(false);
  });
  }, []);

  if(loading) {
    return <div></div>;
  }

  return (
    <>
      <PageIndex data={data}/>
    </>
  )
}

export default About