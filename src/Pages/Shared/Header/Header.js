import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div className="navigation-responsive-styles">
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/login">Login</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
