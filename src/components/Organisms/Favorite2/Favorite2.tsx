import React, { useEffect, useRef } from 'react'
import Introduce from '../Introduce/Introduce';
import './style.css'


const Favorite2 = () => {
  const FavoriteScrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    FavoriteScrollRef.current!.onwheel = (e) => {
      e.preventDefault()
      console.log(e.deltaY)
      if(e.deltaY >= 100) {
        return <div>aaaaaaaaa</div>
      }
    }
  },[])

  return (
    <>
      <div id="C" ref={FavoriteScrollRef}>
      <Introduce />
      アトミックデザインでコンポーネントごとに
      しっかりと責務を切ることができる
      フォルダーごとに　わかりやすく名前がついてる
      わかりやすい。
      </div>
    </>
  )
}

export default Favorite2
