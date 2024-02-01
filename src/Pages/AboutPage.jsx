import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import "../style.css";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
   <Row>
    <Col xs={12} md={6} className="about-details">
     <div>
      <h2 className="about-heading">About Us</h2>
      <div className="google-ratings">
       <div className="google-icon">
        <span>
         <i className="fa-brands fa-google"></i>
        </span>
       </div>
       <div className="ratings-symbol">
        <span>
         <i class="fa-solid fa-star"></i>
        </span>
        <span>
         <i class="fa-solid fa-star"></i>
        </span>
        <span>
         <i class="fa-solid fa-star"></i>
        </span>
        <span>
         <i class="fa-solid fa-star"></i>
        </span>
        <span>
         <i class="fa-solid fa-star"></i>
        </span>
       </div>
      </div>
      <div className="ratings-info">
       <p>Reviews: 100</p>
       <span className="vertical-line"></span>
       <p>Rating: 4.5</p>
      </div>
     </div>
    </Col>
    <Col xs={12} md={6}>
     <Image
      src="https://media.istockphoto.com/id/1493574434/photo/car-rushes-along-the-highway-at-sunset-low-angle-side-view.webp?s=1024x1024&w=is&k=20&c=C6fkK2gq-Ep3pHBcvRU0KHrk86F6c3WzV_ZM6KNonq0="
      alt="About Us"
      className="about-image"
      fluid
     />
    </Col>
   </Row>
  </div>
  <div className="about-container">
   <Row>
    <Col>
     <p className="about-paragraph">Best Car Agency</p>
     <h2 className="about-heading" style={{ textAlign: 'center' }}>
      Why Only Choose TrueCars
     </h2>
     <Row className="cards">
      <Col md={4} sm={12}>
       <Card className="custom-card">
        <Card.Body>
         <div className="d-flex">
          <i className="fa-solid fa-hand-holding-dollar icon"></i>
          <Card.Title>Affordable Price</Card.Title>
         </div>
         <Card.Text className="card-text">
          An affordable price for a luxury car may be significantly higher than
          an affordable price for a budget car...
         </Card.Text>
        </Card.Body>
       </Card>
      </Col>
      <Col md={4} sm={12}>
       <Card className="custom-card">
        <Card.Body>
         <div className="d-flex">
          <i className="fa-solid fa-hand-holding-dollar icon"></i>
          <Card.Title>Affordable Price</Card.Title>
         </div>
         <Card.Text className="card-text">
          An affordable price for a luxury car may be significantly higher than
          an affordable price for a budget car...
         </Card.Text>
        </Card.Body>
       </Card>
      </Col>
      <Col md={4} sm={12}>
       <Card className="custom-card">
        <Card.Body>
         <div className="d-flex">
          <i className="fa-solid fa-hand-holding-dollar icon"></i>
          <Card.Title>Affordable Price</Card.Title>
         </div>
         <Card.Text className="card-text">
          An affordable price for a luxury car may be significantly higher than
          an affordable price for a budget car...
         </Card.Text>
        </Card.Body>
       </Card>
      </Col>
     </Row>
     <Row className="icon-section">
      <Col sm={12} md={3} className="icon-item">
       <div className="icon-heading">
        <i className="fa-solid fa-car icon" style={{ fontSize: '2rem' }}></i>
        <h3>23K+</h3>
       </div>
       <p className="icon-text">Cars Available</p>
      </Col>
      <Col sm={12} md={3} className="icon-item">
       <div className="icon-heading">
        <i className="fa-solid fa-car icon" style={{ fontSize: '2rem' }}></i>
        <h3>15K+</h3>
       </div>
       <p className="icon-text">Cars Sold</p>
      </Col>
      <Col sm={12} md={3} className="icon-item">
       <div className="icon-heading">
        <i className="fa-solid fa-car icon" style={{ fontSize: '2rem' }}></i>
        <h3>7K+</h3>
       </div>
       <p className="icon-text">Used Cars</p>
      </Col>
      <Col sm={12} md={3} className="icon-item">
       <div className="icon-heading">
        <i className="fa-solid fa-car icon" style={{ fontSize: '2rem' }}></i>
        <h3>3.95%</h3>
       </div>
       <p className="icon-text">Customer Satisfaction</p>
      </Col>
     </Row>
    </Col>
   </Row>
  </div>
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
      <Footer />
    </div>
  );
}
