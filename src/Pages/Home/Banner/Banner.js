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
            <h1>Hello there I am your dentist the TEETH WIZARD.</h1>
              <h4>I am an Independent Dentist who is available 24/7.You can contact me at any time when needed</h4>
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
              <h1>Something wrong with your teeth?</h1>
              <h4>No worries the teeth wizard is here.Make an appoinment as soon as possible.I will be very happy to help you.</h4>
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
            <h1>Discount for previous clients!!</h1>
              <h4>Any client who took service from me previously will be rewarded with 20% discount.So hurry up and make appoinment.</h4>
              <button className="appointment-button">Make Appoinment</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
