import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import {
 Container,
 Row,
 Col,
 Form,
 Button,
 Card,
 Breadcrumb,
} from 'react-bootstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const FeatureCard = ({ icon, title, description }) => {
 return (
  <Card className="text-center feature-card">
   <Card.Body>
    <div className="icon-container">{icon}</div>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}</Card.Text>
   </Card.Body>
  </Card>
 )
}

export default function ContactPage() {
 const navigate = useNavigate()
 const handleClick = () => {
  navigate('/')
 }
 const MapComponent = () => {
  const mapCenter = [51.505, -0.09]

  return (
   <MapContainer
    center={mapCenter}
    zoom={13}
    style={{ height: '400px', width: '100%' }}
   >
    <TileLayer
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={mapCenter}>
     <Popup>68, Landsriver St. Welson California </Popup>
    </Marker>
   </MapContainer>
  )
 }

 const handleSubmit = (event) => {
  event.preventDefault()
 }
 return (
  <div>
   <Navbar />
   <div className="contact-banner mt-5">
    <h1 className="contact-heading">Contacts</h1>
    <Breadcrumb>
     <Breadcrumb.Item
      className="link"
      style={{ textDecoration: 'none', color: 'white' }}
      onClick={handleClick}
     >
      Home
     </Breadcrumb.Item>
     <div className="arrow">&rarr;</div>
     <Breadcrumb.Item active className="link">
      Contact
     </Breadcrumb.Item>
    </Breadcrumb>
   </div>
   <Container className="mt-5 contact-cards">
    <Row>
     <Col md={6} lg={3}>
      <FeatureCard
       icon={<i className="fa-solid fa-location-dot"></i>}
       title="Head Office"
       description="68 Landsriver St, Welson California, UK 22066"
      />
     </Col>
     <Col md={6} lg={3}>
      <FeatureCard
       icon={<i className="fa-solid fa-phone"></i>}
       title="Phone"
       description="+303 123 456 7 Sales Dept. 0800 123 4567"
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
       description="FairView Ave, El Monte California UK 91732"
      />
     </Col>
    </Row>
   </Container>
   <Container className="mt-5 mb-5">
    <Row>
     <Col md={6}>
      <MapComponent />
     </Col>
     <Col md={6}>
      <h2 className="form-heading">Send a Message</h2>
      <p className="form-paragraph">
       Morning itself it seed two sixth let creeping upon greater fruitful
       brought dominion winged great stars be open, creature won’t. You’re face
       that bring they’re life days lesser. Face it day itself rule he be saw
       waters.
      </p>
      <Form onSubmit={handleSubmit}>
       <Form.Group controlId="formName">
        <Form.Control
         type="text"
         placeholder="Your Name"
         required
         className="mb-3"
        />
       </Form.Group>

       <Form.Group controlId="formEmail">
        <Form.Control
         type="email"
         placeholder="Your Email"
         required
         className="mb-3"
        />
       </Form.Group>

       <Form.Group controlId="formMessage">
        <Form.Control
         as="textarea"
         rows={4}
         placeholder="Your Message"
         required
         className="mb-3"
        />
       </Form.Group>
       <Button variant="none" type="submit" className="sendBtn">
        SEND MESSAGE
       </Button>
      </Form>
     </Col>
    </Row>
   </Container>
   <Footer />
  </div>
 )
}
