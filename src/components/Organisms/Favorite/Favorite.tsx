import React from 'react'
import './style.css'
import FirstDemo from '../../../images/LOL.png'
import LOLMAP from '../../../images/LOLMAP.png'
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import './responsive.css'

const Favorite = () => {
  const { ref, inView } = useInView({
        // オプション
        rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
  })



  return (
    <>
      <div id="header">
        <div className="scrolldown1">
          <span>Scroll</span>
        </div>
      </div>
      <div id="favorite_container">
        <div className="obi">
          私が好きなゲームであるLeague of Legends (通称LoL)について
        </div>
        <div className="official_navi">
          <div className="official_text">
            ・こちらがLeague of Legendsの公式サイトです。
          </div>
          <a href="https://www.leagueoflegends.com/ja-jp/" className="btn02 rotatefront" target="_blank" rel="noreferrer">
            <span>League of Legends</span>
            <span>公式サイトへ　➡</span>
          </a>
        </div>
        <div className="favorite_main">
          <div className="favorite_section1" ref={ref}>
            {inView && (
              <>
                <img className="demo" src={LOLMAP} alt=""/>
                <div className="favorite_game_text animate__animated animate__fadeInUp">
                  リーグ・オブ・レジェンドは、チームで戦うストラテジーゲーム。 5体の強力な“チャンピオン”で構成された2つのチームが、互いに相手の本拠地を目指して激突します。 100体以上の多彩なチャンピオンの中から自分の使う1体を選んで、スキルを披露、キルを獲得、そしてタワーを破壊して勝利を掴みましょう。
                </div>
                <div className="favorite_game_text animate__animated animate__fadeInUp">
                  本作のジャンルはいわゆる「MOBA系」「DOTA系」と呼ばれており、Steamでリリースされている『Dota 2』やセガによる『カオスヒーローズオンライン』は同ジャンルとされています。プレイヤーが操作する「チャンピオン」と呼ばれるキャラクターは百体以上存在しており、現在も新キャラクターが追加され続けています。そして同じ腕前のプレイヤー同士がマッチングされる対戦システムや、Free-to-Playにも関わらず「ペイトゥーウィン(お金をかけたプレイヤーが勝ち易くなる)」に繋がらない課金形態も高く評価されています。
                </div>
              </>
            )}
          </div>
          <div className="obi">
            League of Legendsについての私の考え
          </div>
          <div className="favorite_section2" ref={ref}>
            {inView && (
              <>
                <div className="favorite_game_text">
                League of Legendsはシンプルかつ奥が深いゲームで<br/>
                私も気づけば10年もやっていて、本当に面白いゲームだと思います。<br/>
                ランキングなどには積極的には参加してはいないので、私自身にランキングなどは存在しませんが、カジュアルに遊ぶだけでも充分に長く遊んでいけるゲームであると考えています。<br/>
                日本ではあまり馴染みのないゲームではありますが、<br/>
                昨今E-Sportsが日本でも普及している中、League of Legendsは競技人口が多く
                これからも増え続けるのではないかと思います。
                </div>
              <img className="demo" src={FirstDemo} alt=""/>
            </>
            )}
          </div>
        </div>
      </div> 
    </>
  )
}

export default Favorite