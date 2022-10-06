/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import Weather from '../Weather/Weather'
import './style.css'
import './responsive.css'
import { WeatherData } from '../../../types/weather'
import Me from '../../../photoImage/me.png'

interface Props {
  data: WeatherData
}

const Main:React.FC<Props> = ({ data }) => {
  return (
      <main>
        <div className="mypage_section1">
          <div className="mypage_main">
            <div className="mypage_first">
              <div className="mypage_section1_text">－私について</div>
              <img className="me" src={Me}/>
              <div className="me_furigana">モリアイ　　　　　　　トモアキ</div>
              <div className="me_name">盛合　知明</div>
              <br/>
              <div className="mypage_section1_text2">
              平成３年に北海道で生まれ長く北海道に住んでいました。
              </div>
            </div>
            <div className="mypage_second">
              <div className="mypage_section1_text3">
              そこから25歳の時に本州で働き出しそのまま定住、<br/>
              以降パチンコ店などで働いて生計を立てていました。<br/>
              現在は神奈川県相模原市の新磯野に住んでいます。<br/>
              <br/>
              パチンコ業界も娯楽の多様化によって年々顧客数が<br/>
              減っていきどんどん厳しい状況に追いやられている中<br/>
              下がり続ける業界にいるより<br/>
              未来に選択肢や可能性がある方がよいと感じ<br/>
              プログラムの勉強を始めました。<br/><br/>
              現在はReactとTypescriptを使って<br/>
              APIを叩く際、安全な型をもって情報を引き出せるよう<br/>
              学習しています。
              </div>
              <div className="mypage_item">
                <Weather data={data}/>
                <br/>
                <GoogleMaps />
              </div>
            </div>

          </div>
        </div>
      </main>
  )
}

export default Main