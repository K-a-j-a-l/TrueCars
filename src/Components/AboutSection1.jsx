import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style.css';

const AboutSection1 = () => {
  return (
    <div className="about-container">
      <Row>
        <Col>
          <p className="about-paragraph">Best Car Agency</p>
          <h2 className="about-heading" style={{ textAlign: "center" }}>Why Only Choose TrueCars</h2>
          <Row className="cards">
            <Col md={4} sm={12}>
		<Card className="custom-card">
                   <Card.Body>
                	<div className="d-flex">
                  	    <i className="fa-solid fa-hand-holding-dollar icon"></i>
                  	    <Card.Title>Affordable Price</Card.Title>
                	</div>
                	<Card.Text className="card-text">An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</Card.Text>
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
                	<Card.Text className="card-text">An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</Card.Text>
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
                	<Card.Text className="card-text">An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</Card.Text>
              	    </Card.Body>
            	</Card>
	    </Col>
          </Row>
	   <Row className="icon-section">
            <Col sm={12} md={3} className="icon-item">
		<div className="icon-heading">
		    <i className="fa-solid fa-car icon" style={{fontSize:"2rem"}}></i>
              	    <h3>23K+</h3>
		</div>  
              <p className="icon-text">Cars Available</p>
            </Col>
            <Col sm={12} md={3} className="icon-item">
              	<div className="icon-heading">
		    <i className="fa-solid fa-car icon" style={{fontSize:"2rem"}}></i>
              	    <h3>15K+</h3>
		</div>  
              <p className="icon-text">Cars Sold</p>
            </Col>
            <Col sm={12} md={3} className="icon-item">
              	<div className="icon-heading">
		    <i className="fa-solid fa-car icon" style={{fontSize:"2rem"}}></i>
              	    <h3>7K+</h3>
		</div>  
              	<p className="icon-text">Used Cars</p>
            </Col>
            <Col sm={12} md={3} className="icon-item">
             	<div className="icon-heading">
		    <i className="fa-solid fa-car icon" style={{fontSize:"2rem"}}></i>
              	    <h3>3.95%</h3>
		</div>  
              <p className="icon-text">Customer Satisfaction</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection1;
