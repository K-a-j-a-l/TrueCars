import { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap-accordion'; // Make sure this is the correct import path
import "../../style.css";

const ListingFeatures = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const features = {
    category1: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category2: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    category3: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category4: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    category5: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category6: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    category7: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category8: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    category9: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category10: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    category11: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category12: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
  };
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      image: 'https://listings-prod.tcimg.net/listings/38634/98/35/KM8HB3AB1RU043598/2DF7TDOQAG3DWRFN4QAOLOFU2Q-cr-540.jpg',
      price: '$50.00',
      savings: '$10.00',
      details: ['Detail 1', 'Detail 2', 'Detail 3'],
      category: 'category1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      image: 'product2.jpg',
      price: '$80.00',
      savings: '$15.00',
      details: ['Detail A', 'Detail B', 'Detail C'],
      category: 'category2',
    },
    {
      id: 3,
      name: 'Product 2',
      description: 'Description for Product 2',
      image: 'product2.jpg',
      price: '$80.00',
      savings: '$15.00',
      details: ['Detail A', 'Detail B', 'Detail C'],
      category: 'category2',
    },
    // Add more products as needed
  ];
  const handleFeatureChange = (feature) => {
    const isSelected = selectedFeatures.includes(feature);

    if (isSelected) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>New Cars For Sale</h1>
        <div className="header-buttons">
          <Button variant="primary">See Listings Near Me</Button>
          <Button variant="secondary">Save Search</Button>
        </div>
      </header>

      {/* Main Content */}
      <Container className="mt-5">
        <Row>
          <Col md={3} className="features-list">
            <Accordion>
              {Object.keys(features).map((category, index) => (
                <Card key={category}>
                  <Accordion.Toggle as={Card.Header} eventKey={`${index}`} style={{ cursor: 'pointer' }}>
                    {category}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>
                      <Form className="features-form">
                        {features[category].map((feature) => (
                          <Form.Check
                            key={`${category}-${feature}`}
                            type="checkbox"
                            label={feature}
                            checked={selectedFeatures.includes(feature)}
                            onChange={() => handleFeatureChange(feature)}
                          />
                        ))}
                      </Form>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
          {/* Product Cards */}
          <Col md={9} className="product-list">
            <Row>
              {products.map((product) => (
                <Col key={product.id} md={6}>
                  <Card className="product-card">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <div>
                        <span style={{float:"left", fontSize:"0.8rem"}}>Estimated Price:</span>
                        <span style={{float:"right"}}>Avg Savings off MRP:</span><br/>
                        <span className="fw-bold" style={{float:"left", fontSize:"0.8rem"}}>{product.price}</span>
                        <span className="fw-bold" style={{float:"right"}}>{product.savings}</span><br/><br/>	
                      </div>
                      <ul className="product-details">
                        {product.details.map((detail, index) => (
                          <li key={index} className="mb-0">{detail}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListingFeatures;
