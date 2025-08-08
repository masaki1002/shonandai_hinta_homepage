import React from 'react'
import Iframe from 'react-iframe'
import "./AccessMap.css"

const AccessMap = () => {
  return (
    <section id="accessmap">
      <br></br>
      <h4 class="introTitle">アクセスマップ</h4>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="business-info">
              <p><i class="fas fa-map-marker-alt"></i> 神奈川県藤沢市湘南台2-26-17</p>
              <p><i class="fas fa-subway"></i> 小田急線・相鉄線・市営地下鉄線　湘南台駅西口徒歩４分</p>
              <p><i class="fas fa-phone"></i> <a href="tel:0466-53-5690">TEL&FAX：0466-53-5690</a></p>
              <p><i class="fas fa-clock"></i> 受付時間 9:00-17:00</p>
              <p><i class="far fa-calendar-alt"></i> 不定休</p>
        <br></br>
      </div>
      <div class="small-business-info">
        <p>※予約制とさせて頂きます。予約は電話のみ受付。</p>
        <p>※オイルマッサージ・リンパ浮腫治療は完全予約制。</p>
        <p>※駐車場は近隣のコインパーキングをご利用ください。</p>
        <p>※清潔な治療着をご用意しておりますので、どんな格好でもお越し頂けます。</p>
        <p>※当院は、藤沢市高齢者はり・きゅう・マッサージ利用券取り扱い、生活保護法指定治療院です。交通事故ご相談ください。</p>
      </div>
    </div>

    <div class="col-lg-7 col-md-7 col-sm-12">
      <div class="googlemap">
        <Iframe 
          url={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1626.286576856071!2d139.4638406!3d35.3910413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018516ccc7e13bd%3A0xe9e119140ebb24ac!2z44Gy44Gq44Gf5rK755mC6Zmi!5e0!3m2!1sja!2sjp!4v1551619669794"}
          width='800'
          height='450'
          frameborder="0" 
          allowfullscreen
          >
          
        </Iframe>
      </div>
    </div>

      </div>
    </div>
    


    </section>
  )
}

export default AccessMap