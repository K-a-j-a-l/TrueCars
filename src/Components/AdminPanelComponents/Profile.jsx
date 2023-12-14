import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function Profile() {
  return (
    <div>
      {/* Profile Header */}
      <div className="profile-header">
        <Container fluid>
          <Row>
            <Col md={10} lg={7}>
              <h1 className="profile-title">Hello User</h1>
              <p className="profile-description">
                This is a profile page. This is a profile page. This is a profile page.
                This is a profile page. This is a profile page. This is a profile page.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Profile Content */}
      <Container className="profile-content">
        <Row>
          {/* Left Column - Profile Form */}
          <Col md={8} className="order-sm-2 order-md-1">
            <div className="profile-form-header">
              <Row>
                <Col md={10}>
                  <h4>My Account</h4>
                </Col>
                <Col md={2}>
                  <Button variant="none" className="btnSettings">
                    Settings
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="profile-form">
              <h4>User Information</h4>
              <Form>
                {/* User Information Form Fields */}
                {/* ... (your form fields) */}
              </Form>

              <h4>Contact Information</h4>
              <Form>
                {/* Contact Information Form Fields */}
                {/* ... (your form fields) */}
              </Form>

              <h4>About me</h4>
              <Form>
                {/* About me Form Field */}
                {/* ... (your form field) */}
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
              <p>A short introduction about the user. A short introduction about the user. A short introduction about the user. A short introduction about the user.</p>
              <Row>
                <Col md={12} sm={12}>
                  <div className="social-icons mt-5">
                    {/* Social Media Icons */}
                    {/* ... (your social media icons) */}
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
