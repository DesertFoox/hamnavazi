import React, { Component } from "react";
import Slider from "react-slick";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
    };
    return (
      <div>
        <h2> Lazy Load</h2>
        <Slider {...settings}>
          <div>
            <img
              src={require("../../Assets/Images/profile/profileImg.png").default}
            />
          </div>
          <div>
            <img
              src={require("../../Assets/Images/profile/profileImg.png").default}
              />
          </div>
          <div>
            <img
              src={require("../../Assets/Images/profile/profileImg.png").default}
              />
          </div>
          <div>
            <img
              src={require("../../Assets/Images/profile/profileImg.png").default}
              />
          </div>
        </Slider>
      </div>
    );
  }
}
