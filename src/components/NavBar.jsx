import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap';

export  const Menu = () => {
    return (
  <>
  

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">WAJ-FLIX</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Films</Nav.Link>
      <Nav.Link href="#pricing">Séries</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  </>
  )
  }
  export default Menu;

