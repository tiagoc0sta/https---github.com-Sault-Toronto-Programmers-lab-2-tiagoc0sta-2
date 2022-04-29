import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import starWarLogo from './starWar.png';

export function Navbarr() {
  return (
    <div>
      <p></p>
  
        <Navbar id="Navv" bg="dark" variant="dark">
          <Container>
          <img src={starWarLogo} alt="SW" width="50" height="50"/>
          
          
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="characters">Characters</Nav.Link>
            <Nav.Link href="movies">Movies</Nav.Link>
          </Nav>
          </Container>
        </Navbar>


        
      </div>
  );
}