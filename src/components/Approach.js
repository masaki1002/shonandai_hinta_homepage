import React from 'react'
import './Approach.css'

import Image from 'react-bootstrap/Image';

const Approach = () => {
  
  const intro_container = {
    padding: "64px 0px 12px 12px"
  }

  const intro_paragraph = {
    padding: "50px"
  }

  const hinata_characteristics = {
    padding: "12px 16px"
  }

  const icon_color = {
    color: "teal"
  }


  return (
    <section id="approach">
      <div class="w3-full w3-container w3-paper"><br></br>
        <div class="w3-center" style={intro_container}>
          <h2>ひなた治療院の施術コンセプト&アプローチ</h2>
          <p class="w3-center w3-large">「対症療法から根本療法へ。痛みや不調を薬で抑えるよりも体質改善が重要」</p>
          <div class="w3-left-align" style={intro_paragraph}>
            <p class="w3-large">
            私たちの身体は、日々の生活や仕事、ストレス、加齢などによって、少しずつ疲労やゆがみが蓄積されています。痛みや不調として表れるのは、その「蓄積」が限界に近づいたサインです。
            鍼灸は、そうした不調の根本にアプローチし、身体が本来持っている自然治癒力を引き出す治療法です。ただし、身体は一度の施術ですぐに元通りになるわけではなく、少しずつバランスを整えていくことが必要です。
            <br></br>
            <br></br>
            そのため、継続的な通院によって体調の変化を見守りながら、無理のないペースで「整えていく」ことが、症状の改善と再発予防につながります。
            たとえば、車や歯の定期点検と同じように、私たちの身体にも「メンテナンス」が必要です。不調が出てから慌てて対処するのではなく、日頃から整えておくことで、大きなトラブルを防ぐことができます。
            <br></br>
            <br></br>
            鍼灸は、単に症状を取り除くだけではなく、心身のバランスを整え、疲れにくく回復しやすい身体づくりをサポートします。ご自身の身体を大切にするための“習慣”として、定期的なメンテナンスをぜひ取り入れてみてください。
            私たちは、患者様がご自身の体としっかり向き合い、より良い生活を送っていただくためのサポートをしていきたいと考えています。無理なく、でも着実に、身体の変化を感じていただけるよう一緒に取り組んでいきましょう。
            </p>
          </div>
        </div>
        
        <div class="w3-container" style={hinata_characteristics} id="about">
          <div class="w3-row-padding w3-center">
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo w3-center" style={icon_color}></i>
              <p class="w3-large">安心を最優先</p>
              <p>厳選された国産使い捨て針、<section id="break">抗菌タオルを100%使用</section></p>
            </div>
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo" style={icon_color}></i>
              <p class="w3-large">『即効性・無痛』の治療技術</p>
              <p>予防医学の先進国アメリカにて体系化され、<section id="break">国内では限られた施術者が扱う「Acuzone治療」</section><section id="break">※個人差があります</section></p>
            </div>
            <div class="w3-third">
              <i class="fa fa-check-square-o w3-margin-bottom w3-jumbo" style={icon_color}></i>
              <p class="w3-large">免疫力アップを全力サポート</p>
              <p>頭の反応点から全身を整え、<section id="break">疲労回復と身体のメンテナンスをサポート</section></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach