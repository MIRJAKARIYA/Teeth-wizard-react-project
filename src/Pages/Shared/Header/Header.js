import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Header.css";
import defaultUserPicture from '../../../default-user-profile.png';
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';
const Header = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-style" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand className="fs-1 fw-bold" as={Link} to='/home'>TEETH WIZARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <div className="navigation-responsive-styles">
              <NavLink className={({ isActive }) => isActive ? 'active-style' : 'inactive-style'} to="/home">Home</NavLink>
              {
                location.pathname === ('/home') && <a href='#services' className="text-white">Services</a>
              }
              <NavLink className={({ isActive }) => isActive ? 'active-style' : 'inactive-style'} to="/about">About</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'active-style' : 'inactive-style'} to="/blogs">Blogs</NavLink>
              {
                user && <img src={user.photoURL?user.photoURL:defaultUserPicture} style={{width:'40px',height:'40px'}} className="rounded-circle" alt="" />
              }
              {
                user?<button className="sign-out-button" onClick={()=>signOut(auth)}>sign out</button>:<NavLink className={({ isActive }) => isActive ? 'active-style' :'inactive-style'} to="/login">Login</NavLink>
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
