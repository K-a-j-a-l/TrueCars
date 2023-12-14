import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="text-center feature-card">
      <Card.Body>
        <div className="icon-container">{icon}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const MyComponent = () => {
  return (
    <Container className="mt-5 contact-cards">
      <Row>
        <Col md={6} lg={3}>
          <FeatureCard
            icon={<i className="fa-solid fa-location-dot"></i>}
            title="Head Office"
            description="68 Landsriver St, Welson California 22066"
          />
        </Col>
        <Col md={6} lg={3}>
          <FeatureCard
            icon={<i className="fa-solid fa-phone"></i>}
            title="Phone"
            description="+303 123 456 7890 Sales Dept.  0800 123 4567"
          />
        </Col>
        <Col md={6} lg={3}>
          <FeatureCard
            icon={<i className="fa-solid fa-envelope"></i>}
            title="Email"
            description="info@domain.com support@domain.com"
          />
        </Col>
        <Col md={6} lg={3}>
          <FeatureCard
            icon={<i className="fa-solid fa-store"></i>} 
            title="Showroom"
            description="FairView Ave, El Monte California 91732"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
