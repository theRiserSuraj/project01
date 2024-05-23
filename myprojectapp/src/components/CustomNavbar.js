import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Body Shop </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">TRENDING</Nav.Link>
            <Nav.Link href='/body'>BODY</Nav.Link>
            <Nav.Link href="/face">FACE</Nav.Link>
            <Nav.Link href="/Hair">HAIR</Nav.Link>
            <Nav.Link href="/MakeUp">MAKEUP</Nav.Link>
            <Nav.Link href="/fragnance">FRAGNACE</Nav.Link>
            <Nav.Link href="/Gifts">GIFTS</Nav.Link>
            <Nav.Link href="/Range">RANGE</Nav.Link>
            <Nav.Link href="/tips">TIPS & ADICE</Nav.Link>
            <Nav.Link href="/Offers">OFFERS</Nav.Link>
            <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default CustomNavbar;
