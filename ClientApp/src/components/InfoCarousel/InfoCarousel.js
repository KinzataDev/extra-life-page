import React, { Component } from 'react';
import { Container } from '../Base/Container';
import { CTALink } from '../CTALink/CTALink';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InfoCarousel.css";

export class InfoCarousel extends Component {
  render () {
    var settings = {
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="info-carousel">
        <Container>
          <Slider {...settings} className="info-carousel__slider">
            <a href="#members" className="info-carousel__slide">
              <img src="/images/carousel_extralife.jpg" alt="" />
              <div className="info-carousel__slide-cta" style={{right: 75 + 'px'}}>
                <CTALink
                    title='Donate'
                    type='secondary'
                />
            </div>
            </a>
            <a href="#members" className="info-carousel__slide">
              <img src="/images/carousel_streaming.jpg" alt=""/>
              <div className="info-carousel__slide-cta">
                  <CTALink
                      title='Donate'
                      type='secondary'
                  />
              </div>
            </a>
          </Slider>
        </Container>
      </div>
    );
  }
}