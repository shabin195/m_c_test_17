import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <div className="headerWidth  row">
      <Navbar bg="white" variant="white" expand="lg">
        <Navbar.Brand href="#home" className="ml-2">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">All</Nav.Link>
            <Nav.Link href="#about">Asia</Nav.Link>
            <Nav.Link href="#contact">Europe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;