import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Modal, ModalBody } from "reactstrap";
import Slider from "react-slick";

import "../../Assets/Style/slider.scss";
const Slide = (props) => {
  const { className } = props;

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <ChevronLeft size={40} className={`coustom-arrow`} />,
    prevArrow: <ChevronRight size={40} />,
  };
  return (
    <div>
      <Modal
        centered
        color="danger"
        isOpen={props.modal}
        toggle={props.toggle}
        className={className + " modall"}
      >
        <ModalBody className="body">
          <div className="container">
            <Slider {...settings}>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                  alt=""
                />
              </div>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                  alt=""
                />
              </div>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                  alt=""
                />
              </div>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                  alt=""
                />
              </div>
            </Slider>
          </div>{" "}
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Slide;
