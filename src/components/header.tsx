import { useState } from 'react';
import './header.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
<div className="header row px-3 pt-1 fixed-top primary-font">
    <div className="col-3 text-menu" onClick={handleShow}>
        <a>MENU</a>
    </div>
    <div className="col-6 text-center">
        <a>ATHOS ATHLETE</a><span className="text-shadows mobile"> - Unleash The Giant in You</span>
    </div>
  
</div>

<Offcanvas show={show} onHide={handleClose} className="primary-font">
<Offcanvas.Header>
  <Offcanvas.Title className='text-menu' onClick={handleClose}>CLOSE</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
<Nav as="ul" className="navbar-nav pl-5">
      <Nav.Item as="li" onClick={handleClose}>
        <Link to="/"><h1>Home</h1></Link>
      </Nav.Item>
      <Nav.Item as="li" onClick={handleClose}>
      <HashLink smooth to="/#AboutUs">
      <h1>About Athos</h1></HashLink>
      </Nav.Item>
      <Nav.Item as="li" onClick={handleClose}>
      <HashLink smooth to="/#ContactUs">
      <h1>Contact Us</h1></HashLink>
      </Nav.Item>
    </Nav>
</Offcanvas.Body>
</Offcanvas>
</>
  );
}

export default Header;