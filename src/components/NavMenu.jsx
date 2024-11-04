import React from 'react';
import logo from '../assets/logo.png'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';


function NavMenu() {
  return (
    <>

    <Navbar className='mx-5' bg="light" expand="lg">
        <Navbar.Brand href="#">
            <img
            src={logo}
            width="181"
            height="43"
            className="d-inline-block align-top"
            alt="Logo"
            />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav.Link href="#about">Find Suppliers</Nav.Link>
                <NavDropdown title="Find Service Tags" id="basic-nav-dropdown" className='mx-5 my-4'>
                    <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                </NavDropdown>
            <Button className='px-4 fw-bolder' variant="btn btn-outline-success">Login / Sign Up</Button>
        </Navbar.Collapse>
    </Navbar>

    </>
  );
}

export default NavMenu