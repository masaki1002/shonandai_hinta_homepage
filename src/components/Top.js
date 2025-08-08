/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Top.css"
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


const Top = () => {

  const text_subtitle = {
    padding: "48px"
  }

  const instagram_icon = {
    padding:"24px 48px"
  }

  return (
<div class="bgimg-1 w3-display-container w3-grayscale-min">
  <div class="w3-display-left w3-text-white" style={text_subtitle}>
    <span class="w3-jumbo w3-hide-small">湘南台の"身近"な治療院</span>
    <span class="w3-xlarge w3-hide-jumbo w3-hide-large w3-hide-medium">湘南台の“身近な治療院”</span>
    <br></br>
    <span class="w3-large">丁寧な施術で身体のメンテナンスをサポート</span>
    <p><a href="#accessmap" class="w3-button w3-teal w3-padding-large w3-large w3-margin-top  w3-hover-opacity-off">ひなた治療院へ行ってみる</a></p>
  </div> 
  <div class="w3-display-bottomleft w3-text-grey w3-xxlarge" style={instagram_icon}>
    <i class="fa fa-instagram w3-hover-opacity"></i>
  </div>
</div>


  








    // <section id="top">
    //  <Carousel>
    //   <Carousel.Item style={carouselHeight} interval={4000}>
    //      <img
    //         className="d-block w-100" src="./outside_01.jpg"
    //         alt="Image One"
    //       />
    //     <Carousel.Caption>
    //       {/* <h3>ひなた治療院外観</h3> */}
    //       {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item style={carouselHeight} interval={4000}>
    //      <img
    //         // width={1920} height={1080}
    //         className="d-block w-100" src="./outside_02.jpg"
    //         alt="Image One"
    //       />
    //     <Carousel.Caption>
    //       {/* <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item style={carouselHeight} interval={4000}>
    //     <img
    //         className="d-block w-100" src="./inside_01.jpg"
    //         alt="Image One"
    //       />
    //     <Carousel.Caption>
    //       {/* <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item style={carouselHeight} interval={4000}>
    //     <img
    //         className="d-block w-100" src="./inside_interior.jpg"
    //         alt="Image One"
    //       />
    //     <Carousel.Caption>
    //       {/* <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    //  </section>
  )
}

export default Top