import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../style.css";

const AboutSection2 = () => {
  return (
    <div className="about-container p-5">
      {/* Heading and Paragraph with Button */}
      <Row className="mb-4">
        <Col>
          <h2 className="about-heading">How Does It Work</h2>
          <p className="about-paragraph" style={{textAlign:"left"}}>Here are some of the featured cars in different categories</p>
        </Col>
      </Row>
      <Row className="items">
        {/* Column 1 */}
        <Col md={3} className="mb-4 item">
          <div className="serial-icon"><i class="fa-solid fa-1"></i></div>
          <div className="desc-icon"><i class="fa-solid fa-map-location-dot"></i></div>
	  <h5 className="about-subheading">Choose Anywhere</h5>
          <p className="about-paragraph">
            Description of Feature 1. Add more details about this feature if needed.
          </p>
        </Col>

        {/* Column 2 */}
        <Col md={3} className="mb-4 item">
          <div className="serial-icon"><i class="fa-solid fa-2"></i></div>
          <div className="desc-icon"><i class="fa-solid fa-square-phone"></i></div>
          <h5 className="about-subheading">Contact With Us</h5>
          <p className="about-paragraph">
            Description of Feature 2. Add more details about this feature if needed.
          </p>
        </Col>

        {/* Column 3 */}
        <Col md={3} className="mb-4 item">
          <div className="serial-icon"><i class="fa-solid fa-3"></i></div>
          <div className="desc-icon"><i class="fa-solid fa-wallet"></i></div>
          <h5 className="about-subheading">Pay For The Car</h5>
          <p className="about-paragraph">
            Description of Feature 3. Add more details about this feature if needed.
          </p>
        </Col>

        {/* Column 4 */}
        <Col md={3} className="mb-4 item">
          <div className="serial-icon"><i class="fa-solid fa-4"></i></div>
          <div className="desc-icon"><i class="fa-solid fa-car"></i></div>
          <h5 className="about-subheading">Receive The Car</h5>
          <p className="about-paragraph">
            Description of Feature 4. Add more details about this feature if needed.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection2;
