import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-style" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div className="navigation-responsive-styles">
              <Link to="/home">Home</Link>
              {
                location.pathname.includes('/home') && <a href='home#services'>Services</a>
              }
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
