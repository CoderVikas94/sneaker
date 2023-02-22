import "./hero.css";
import hero1 from "../../assets/images/image-product-1.jpg";
import hero2 from "../../assets/images/image-product-2.jpg";
import hero3 from "../../assets/images/image-product-3.jpg";
import hero4 from "../../assets/images/image-product-4.jpg";
import { Modal } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {IoChevronForwardOutline,IoChevronBackOutline} from 'react-icons/io5'

const ImageModal = ({ isModalOpen, handleOk, handleCancel }: any) => {
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="modal_image"
      footer={null}
    >
        <span className="prev_span"><IoChevronBackOutline className="prev_arrow"/></span>
        <span className="next_span"><IoChevronForwardOutline className="next_arrow"/></span>
      <Carousel className="carousel_box">
        
        <div className="carousel">
          <img src={hero1} alt="hero-image" />
        </div>

        <div className="carousel">
          <img src={hero2} alt="hero-image" />
        </div>
        <div className="carousel">
          <img src={hero3} alt="hero-image" />
        </div>

        <div className="carousel">
          <img src={hero4} alt="hero-image" />
        </div>
      </Carousel>
    </Modal>
  );
};

export default ImageModal;
