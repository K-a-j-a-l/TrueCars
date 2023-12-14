import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../style.css'

const ContactForm = () => {
  const MapComponent = () => {
    const mapCenter = [51.505, -0.09];

    return (
      <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter}>
          <Popup>68, Landsriver St. Welson California </Popup>
        </Marker>
      </MapContainer>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={6}>
          <MapComponent />
        </Col>
        <Col md={6}>
          <h2 className="form-heading">Send a Message</h2>
	  <p className="form-paragraph">Morning itself it seed two sixth let creeping upon greater fruitful brought dominion winged great stars be open, creature won’t. You’re face that bring they’re life days lesser. Face it day itself rule he be saw waters.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your Name" required className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Your Email" required className="mb-3"/>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" required className="mb-3"/>
            </Form.Group>
            <Button variant="none" type="submit" className="sendBtn">
              SEND MESSAGE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
