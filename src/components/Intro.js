import React from 'react'
import "./Intro.css";

import Image from 'react-bootstrap/Image';

const Intro = () => {
  const intro_container = {
    padding: "64px 0px 12px 12px"
  }

  const intro_paragraph = {
    padding: "50px"
  }
  

  return (
  <section id="intro">
    <div class="w3-full w3-container"><br></br>
      <div class="w3-center" style={intro_container}>
        <h2>ひなた治療院の紹介</h2>
        <div class="w3-left-align" style={intro_paragraph}>
          <h5>日常を少し離れて、心と身体を整える時間を!<span class="break">湘南台の隠れ家 鍼灸マッサージサロン「ひなた治療院」</span></h5>
          <p class="w3-large">
          忙しい毎日、気づかないうちに疲れやストレスをためこんでいませんか？湘南台駅近くにある「ひなた治療院」は、鍼灸とマッサージの力で、心と身体のバランスをやさしく整える、女性にも人気の治療院です。<br></br>
          肩こりや腰痛、自律神経の乱れ、年齢による体調の変化——<br></br><br></br>
          病院に行くほどではないけれど、ずっと気になっている小さな不調。そんな“なんとなくの不調”こそ、丁寧に向き合うことで、日常が大きく変わります。<br></br><br></br>
          「藤沢市で信頼できる鍼灸院を探している」「湘南台でリラックスできるマッサージを受けたい」、そんな方に選ばれ続け、幅広い年代の患者さまにご来院いただいております。
          「ひなた」のような温かな空間で、一人ひとりのお悩みに合わせたオーダーメイドの施術をご提供します。治療でありながら、リラックスや癒しも感じていただける時間になるはずです。
          完全予約制・静かなプライベート空間で、安心してご相談いただけます。湘南台・藤沢エリアで、質の高い鍼灸マッサージをお探しの方に、ぜひお越しいただきたい治療院です。  
        </p>
      </div>
    </div>
  </div>

    <div class="w3-container w3-row w3-center w3-teal w3-padding-64">
      <div class="w3-quarter">
        <span class="w3-xxlarge">19年目</span>
        <br></br>湘南台で開業
      </div>
      <div class="w3-quarter">
        <span class="w3-xxlarge">30,000人+</span>
        <br></br>のべ患者数
     </div>
      <div class="w3-quarter">
        <span class="w3-xxlarge">95%+</span>
        <br></br>治療満足度
      </div>
    <div class="w3-quarter">
        <span class="w3-xxlarge">95%+</span>
        <br></br>リピート率
    </div>
  </div>
</section>

  )
}

export default Intro


