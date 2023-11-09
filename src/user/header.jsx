import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
function Header() {   
        return (
    <div >
                {/* <div className="left">
                    <h3>Countries</h3>
                </div> */}
                  <Navbar bg="white" variant="white" expand="lg">
      <Navbar.Brand href="#home">Countries</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
          <Nav.Link href="#home">All</Nav.Link>
          <Nav.Link href="#about">Asia</Nav.Link>
          <Nav.Link href="#contact">Europe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
                
                {/* <div className="right">
                   <ul>
                       <li>All</li>
                       <li>Asia</li>
                       <li>Europe</li>
                   </ul>
                </div> */}
          </div>
        );
}
export default Header;