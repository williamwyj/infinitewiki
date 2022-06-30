import React from "react";

import { Navbar, Container, Nav, Modal, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Ship</Nav.Link>
            <NavDropdown title='Base' id='navbarScrollingDropDown'>
              <NavDropdown.Item href='#'>Early</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
