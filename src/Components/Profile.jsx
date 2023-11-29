import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function Profile() {
  return (
    <div>
      <div className="profile-header">
        <Container fluid>
          <Row>
            <Col md={10} lg={7}>
              <h1 className="profile-title">Hello User</h1>
              <p className="profile-description">This is a profile page. This is a profile page. This is a profile page. This is a profile page. This is a profile page. This is a profile page. </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="profile-content">
      <Row >
        <Col md={8} className="order-sm-2 order-md-1">
		<div className="profile-form-header">
		<Row>
		    <Col md={10}>
			<h4>My Account</h4>
		    </Col>
		    <Col md={2}>
			<Button variant="none" className="btnSettings">Settings</Button>
		    </Col>
		</Row>
	  </div>
          <div className="profile-form">
            <h4>User Information</h4>
            <Form>
		<Row>
		    <Col md={6}>
			<Form.Group controlId="Name">
                	    <Form.Label>Name</Form.Label>
                	    <Form.Control type="text" value="User Name" />
              		</Form.Group>
		    </Col>
		    <Col md={6}>
			<Form.Group controlId="Email">
                	    <Form.Label>Email</Form.Label>
                	    <Form.Control type="email" value="User email" />
              		</Form.Group>
		    </Col>
		</Row>
		<Row>
		    <Col md={6}>
			<Form.Group controlId="firstName">
                	    <Form.Label>First Name</Form.Label>
                	    <Form.Control type="text" value="First Name" />
              		</Form.Group>
		    </Col>
		    <Col md={6}>
			<Form.Group controlId="lastName">
                	    <Form.Label>Last Name</Form.Label>
                	    <Form.Control type="text" value="Last Name" />
              		</Form.Group>
		    </Col>
		</Row>
            </Form>
	    <h4>Contact Information</h4>
            <Form>
		<Row>
		    <Col md={12} >
			<Form.Group controlId="Address">
                	    <Form.Label>Address</Form.Label>
                	    <Form.Control type="text" value="Address" />
              		</Form.Group>
		    </Col>
		</Row>
		<Row>
		    <Col md={4}>
			<Form.Group controlId="City">
                	    <Form.Label>City</Form.Label>
                	    <Form.Control type="text" value="City" />
              		</Form.Group>
		    </Col>
		    <Col md={4}>
			<Form.Group controlId="Country">
                	    <Form.Label>Country</Form.Label>
                	    <Form.Control type="text" value="Country" />
              		</Form.Group>
		    </Col>
		    <Col md={4}>
			<Form.Group controlId="postalCode">
                	    <Form.Label>Postal Code</Form.Label>
                	    <Form.Control type="text" value="Postal Code" />
              		</Form.Group>
		    </Col>
		</Row>
            </Form>
	    <h4>About me</h4>
            <Form>
		<Row>
		    <Col md={12}>
			<Form.Control as="textarea" rows={3} value="Write a short bio about yourself" />
		    </Col>
		</Row>
            </Form>
          </div>
	  
        </Col>

        {/* Right Column - User Information */}
        <Col md={4} className="order-sm-1 order-md-2">
		<div className="profile-info">
            	<img
              	src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              	alt="User"
              	className="user-image"
            	/>
            	<h2>User Name</h2>
            	<p>A short introduction about the user. A short introduction about the user. A short introduction about the user. A short introduction about the user. </p>
		<Row>
     		<Col md={12} sm={12}>
      		  <div className="social-icons mt-5">
       		  <a href="#" target="_blank" rel="noopener noreferrer">
        		<i className="fa-brands fa-square-facebook"> </i>{' '}
       		  </a>
       		  <a href="#" target="_blank" rel="noopener noreferrer">
        		<i className="fa-brands fa-square-twitter"> </i>{' '}
       		  </a>
       		  <a href="#" target="_blank" rel="noopener noreferrer">
        		<i className="fa-brands fa-square-instagram"> </i>{' '}
       		  </a>
       		  <a href="#" target="_blank" rel="noopener noreferrer">
        		<i className="fa-brands fa-linkedin"> </i>{' '}
       		  </a>
      		</div>
     	       </Col>
	      </Row>
          	</div>
        </Col>
      </Row>
    </Container>
    </div>
	
  );
}
