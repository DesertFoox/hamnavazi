import React, { useState } from "react";
import Slider from "react-slick";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import '../../Assets/Style/slider.scss'
const Slide = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal centered color='danger' isOpen={modal} toggle={toggle} className={className + " modall"}>
        <ModalBody className="body">
          <div className="container">
            <Slider {...settings}>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                />
              </div>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                />
              </div>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
                />
              </div>
              <div>
                <img
                  src={
                    require("../../Assets/Images/profile/profileImg.png")
                      .default
                  }
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
