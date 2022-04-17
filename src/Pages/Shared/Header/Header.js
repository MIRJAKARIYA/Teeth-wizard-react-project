import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Header.css";
import defaultUserPicture from '../../../default-user-profile.png';
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';
const Header = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  console.log(user)
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
                location.pathname === ('/home') && <a href='#services'>Services</a>
              }
              <Link to="/about">About</Link>
              <Link to="/blogs">Blogs</Link>
              {
                user && <img src={user.photoURL?user.photoURL:defaultUserPicture} style={{width:'40px',height:'40px'}} className="rounded-circle" alt="" />
              }
              {
                user?<button onClick={()=>signOut(auth)}>sign out</button>:<Link to="/login">Login</Link>
              }
              
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
