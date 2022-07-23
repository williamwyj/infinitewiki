import React from "react";

import { Navbar, Container, Nav, Modal, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <NavDropdown title='Ship' id='navbarScrollingDropDown'>
              <NavDropdown.Item href='/ships/aircrafts'>
                Aircraft
              </NavDropdown.Item>
              <NavDropdown.Item href='#'>Small Ships</NavDropdown.Item>
              <NavDropdown.Item href='#'>Large Ships</NavDropdown.Item>
              <NavDropdown.Item href='#'>Utility Ships</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Base' id='navbarScrollingDropDown'>
              <NavDropdown.Item href='#'>Early Phase</NavDropdown.Item>
              <NavDropdown.Item href='#'>Mid Phase</NavDropdown.Item>
              <NavDropdown.Item href='#'>Late Phase</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
