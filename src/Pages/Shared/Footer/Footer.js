import React from "react";
import "./Footer.css";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <div className="footer-content">
          <h5 className="text-decoration-underline">CONTACT INFORMATION</h5>
          <p>
            Email:
            <a
              className="text-white ms-2"
              href="mailto:mirjakariya239@gmail.com"
            >
              mir33-239@gmail.com
            </a>
          </p>
          <p>Phone: 017XXXXXX31</p>
          <p>Tel: 25935XXX58</p>
          <div className="d-flex ms-1">
            <div className="me-3">
              <a
                className="text-white fs-3"
                href="https://www.facebook.com/MIRJAKARIYA239"
              >
                <GrFacebook></GrFacebook>
              </a>
            </div>
            <div className="me-3">
              <a
                className="text-white fs-3"
                href="https://www.linkedin.com/in/mir-jakariya-99b777229/"
              >
                <BsLinkedin></BsLinkedin>
              </a>
            </div>
            <div className="me-3">
              <a
                className="text-white fs-3"
                href="https://github.com/MIRJAKARIYA"
              >
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <h5 className="text-decoration-underline">SERVICE'S AVAILABLE</h5>
          <p>Dental Implant.</p>
          <p>Wishdom Teeth.</p>
          <p>Teeth Whitening.</p>
          <p>Orthodontic Treatment.etc.</p>
        </div>
        <div className="footer-content">
          <h5 className="text-decoration-underline">OFFICE ADDRESS</h5>
          <p>Street: 17/4.</p>
          <p>Sub-District: Kaliakair.</p>
          <p>District: Gazipur.</p>
          <p>Post Office: Boardghar.</p>
        </div>
        <div className="footer-content">
          <h5 className="text-decoration-underline">EXPERIENCE'S</h5>
          <p>Five years experience of Orthodontic Treatment</p>
          <p>Four years experience of Teeth Whitening.</p>
          <p>Three years experience of Dental Implant.etc.</p>
        </div>
      </div>
      <small className="d-block text-center mt-5">© All rights reserved.2022.</small>
    </footer>
  );
};

export default Footer;
