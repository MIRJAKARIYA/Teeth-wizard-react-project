import { Carousel } from "react-bootstrap";
import React from "react";
import banner1 from "../../../banner-images/banner1.png";
import banner2 from "../../../banner-images/banner2.png";
import banner3 from "../../../banner-images/banner3.png";
import './Banner.css';

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel className="h-100" interval={3000}>
        <Carousel.Item className="px-5" style={{ height: "600px" }}>
          <div className="d-md-flex align-items-center justify-content-around h-100">
            <div className="responsive-width-class">
              <img className="banner-image-style" src={banner1} alt="First slide" />
            </div>
            <div className="responsive-width-class">
            <h3>Hello there how arsadfasdfasdfasdfsafe you</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam quaerat voluptate tempore ex iusto impedit aperiam, alias eum velit id neque obcaecati. Iure numquam neque cum sit? Quis, inventore.</p>
              <button className="appointment-button">Make Appoinment</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="px-5" style={{ height: "600px" }}>
        <div className="d-md-flex align-items-center justify-content-around h-100" >
            <div className="responsive-width-class">
              <img className="banner-image-style" src={banner2} alt="First slide" />
            </div>
            <div className="responsive-width-class">
              <h3>Hello there how arsadfasdfasdfasdfsafe you</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam quaerat voluptate tempore ex iusto impedit aperiam, alias eum velit id neque obcaecati. Iure numquam neque cum sit? Quis, inventore.</p>
              <button className="appointment-button">Make Appoinment</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="px-5" style={{ height: "600px" }}>
        <div className="d-md-flex align-items-center justify-content-around h-100">
            <div className="responsive-width-class">
              <img className="banner-image-style" src={banner3} alt="First slide" />
            </div>
            <div className="responsive-width-class">
            <h3>Hello there how arsadfasdfasdfasdfsafe you</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nam quaerat voluptate tempore ex iusto impedit aperiam, alias eum velit id neque obcaecati. Iure numquam neque cum sit? Quis, inventore.</p>
              <button className="appointment-button">Make Appoinment</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
