import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='container'>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <h4>USEFUL INFORMATION</h4>
          <p>Help & FAQs</p>
          <p>Terms & Conditions</p>
          <p>Returns Refund & Cancellation</p>
          <p>Privacy Policy</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <h4>WAYS TO SHOP</h4>
          <p>Store finder</p>
          <p>Gifts Cards</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <h4>ABOUT US</h4>
          <p>Loyalty Club</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              India
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Uk</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Us</Dropdown.Item>
              <Dropdown.Item href="#/action-3">France</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Germany</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Russia</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Afg</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Siberia</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Ukrain</Dropdown.Item>
              <Dropdown.Item href="#/action-3">SriLanka</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Italy</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Belarus</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Poland</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Nepal</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bhutan</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Myanmar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <div className='Footer-Content'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <p>© 2024 The Body Shop. All Rights Reserved.
              The Body Shop International Limited (Company No. 1284170), Watersmead, Littlehampton, West Sussex, BN17 6LS.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
