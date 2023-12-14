import { Container, Row, Col } from 'react-bootstrap'
import '../../style.css'
import Card from './CardLayout'

export default function Cards() {
 return (
  <div className="text-center shop-section">
   <Container>
    <Row className="justify-content-center">
     <Col md={8}>
      <h1 className="display-6 "> Shop Your Favorite Brand </h1>{' '}
     </Col>{' '}
    </Row>{' '}
    <Row className="justify-content-center">
     <Col md={8}>
      <h4> All the brands </h4>{' '}
     </Col>{' '}
    </Row>{' '}
    <Row className="justify-content-center">
     <Col md={2} sm={6} className="mb-3">
      <Card
       name="Toyota"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97I-6yVIxzjtqsqoQbUuE5ztdCMBQEeamAax6-58&s"
      />
     </Col>{' '}
     <Col md={2} sm={6} className="mb-3">
      <Card
       name="BMW"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97I-6yVIxzjtqsqoQbUuE5ztdCMBQEeamAax6-58&s"
      />
     </Col>{' '}
     <Col md={2} sm={6} className="mb-3">
      <Card
       name="Chevrolet"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33JgTsL8hXvvukRzsGLo-375O8FRcifxI0LDyLlWnnQ&s"
      />
     </Col>{' '}
     <Col md={2} sm={6} className="mb-3">
      <Card
       name="Honda"
       image="https://cdn.icon-icons.com/icons2/2402/PNG/512/honda_logo_icon_145821.png"
      />
     </Col>{' '}
    </Row>{' '}
    <Row className="justify-content-center">
     <Col md={2} className="mb-3">
      <Card
       name="Acura"
       image="data:image/png;base64,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"
      />
     </Col>{' '}
     <Col md={2} className="mb-3">
      <Card
       name="Audi"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97I-6yVIxzjtqsqoQbUuE5ztdCMBQEeamAax6-58&s"
      />
     </Col>{' '}
     <Col md={2} className="mb-3">
      <Card
       name="Fiat"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33JgTsL8hXvvukRzsGLo-375O8FRcifxI0LDyLlWnnQ&s"
      />
     </Col>{' '}
     <Col md={2} className="mb-3">
      <Card
       name="Ford"
       image="https://cdn.icon-icons.com/icons2/2402/PNG/512/honda_logo_icon_145821.png"
      />
     </Col>{' '}
    </Row>{' '}
    <Row className="justify-content-center">
     <Col md={2} className="mb-3">
      <Card
       name="Genesis"
       image="data:image/png;base64,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"
      />
     </Col>{' '}
     <Col md={2} className="mb-3">
      <Card
       name="GMC"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97I-6yVIxzjtqsqoQbUuE5ztdCMBQEeamAax6-58&s"
      />
     </Col>{' '}
     <Col md={2} className="mb-3">
      <Card
       name="Jeep"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33JgTsL8hXvvukRzsGLo-375O8FRcifxI0LDyLlWnnQ&s"
      />
     </Col>{' '}
     <Col md={2} className="mb-3">
      <Card
       name="Kia"
       image="https://cdn.icon-icons.com/icons2/2402/PNG/512/honda_logo_icon_145821.png"
      />
     </Col>{' '}
    </Row>{' '}
   </Container>{' '}
  </div>
 )
}
