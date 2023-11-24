// Import necessary dependencies
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../style.css'

// HeroSection component
const HeroSection = () => {
 return (
  <div className="hero-section text-center">
   <Container>
    <Row className="justify-content-center">
     <Col md={8}>
      <h1 className="display-4"> Explore the Perfect Ride </h1>{' '}
      <h4 className="lead"> Find the car that suits your style and needs. </h4>{' '}
     </Col>{' '}
    </Row>{' '}
    <Row className="justify-content-center mt-4">
     <Col md={8} className="mx-auto">
      <Form className="d-flex align-items-center text-center">
       <Form.Group controlId="searchForm">
        <Form.Control type="text" placeholder="Search for your dream car" />
       </Form.Group>{' '}
       <Button variant="success" type="submit">
        Search{' '}
       </Button>{' '}
      </Form>{' '}
     </Col>{' '}
    </Row>{' '}
   </Container>{' '}
  </div>
 )
}

export default HeroSection
