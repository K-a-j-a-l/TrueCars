import React, { useState, useEffect } from 'react'
import {
 Container,
 Row,
 Col,
 InputGroup,
 FormControl,
 Button,
 Card,
 Form,
 Nav,
} from 'react-bootstrap'

import '../style.css'
import Deals from '../Components/AdminPanelComponents/Deals'

export default function AdminPanel() {
 const [activeTab, setActiveTab] = useState('dashboard')
 const [sidebarOpen, setSidebarOpen] = useState(false)
 const userType = sessionStorage.getItem('role')

 const handleTabChange = (tab) => {
  setActiveTab(tab)

  if (window.innerWidth < 768) {
   setSidebarOpen(false)
  }
 }

 const handleToggleSidebar = () => {
  setSidebarOpen(!sidebarOpen)
 }

 return (
  <Container fluid>
   <Row>
    {sidebarOpen && (
     <Col
      onClick={handleToggleSidebar}
      xs={12}
      md={3}
      className={`admin-sidebar ${
       window.innerWidth < 768 ? 'mobile-open' : ''
      }`}
     >
      <div>
       <img
        src="https://img.freepik.com/premium-vector/car-company-logo-template_674522-78.jpg?w=740"
        alt="Company Logo"
        className="company-logo"
       />
       <div className="user-profile">
        <img
         src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
         alt="User Profile"
         className="profile-picture"
        />
        <p className="user-name">John Doe</p>
       </div>

       {/* Navigation */}
       <Nav className="flex-column">
        <Nav.Item>
         <Nav.Link
          className="w-100 mt-2"
          eventKey="dashboard"
          active={activeTab === 'dashboard'}
          onClick={() => handleTabChange('dashboard')}
         >
          Dashboard
         </Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link
          className="w-100 mt-2"
          eventKey="profile"
          active={activeTab === 'profile'}
          onClick={() => handleTabChange('profile')}
         >
          Profile
         </Nav.Link>
        </Nav.Item>
        {userType === 'DEALER' && (
         <Nav.Item>
          <Nav.Link
           className="w-100 mt-2"
           eventKey="deals"
           active={activeTab === 'deals'}
           onClick={() => handleTabChange('deals')}
          >
           Deals
          </Nav.Link>
         </Nav.Item>
        )}
       </Nav>
      </div>
     </Col>
    )}
    <Col xs={12} md={sidebarOpen ? 9 : 12}>
     <Row className="upper-tab">
      <Col
       xs={2}
       md={sidebarOpen ? 3 : 9}
       className="toggle-sidebar"
       onClick={handleToggleSidebar}
      >
       <span>
        <i className="fa-solid fa-bars"></i>
       </span>
      </Col>
      <Col xs={10} md={3}>
       <InputGroup>
        <FormControl placeholder="Search..." />
       </InputGroup>
      </Col>
     </Row>
     <Row className="content">
      <Col md={12}>
       <h3 className="content-heading">
        {' '}
        {activeTab === 'dashboard'
         ? 'Dashboard'
         : activeTab === 'profile'
         ? 'Profile'
         : activeTab === 'deals'
         ? 'Deals'
         : 'Unknown Tab'}
       </h3>
       {activeTab === 'dashboard' && (
        <div>
         <Row>
          <Col md={3}>
           <Card>
            <Card.Body>
             <Card.Title>Card 1</Card.Title>
             <Card.Text>Content for Card 1</Card.Text>
            </Card.Body>
           </Card>
          </Col>

          <Col md={3}>
           <Card>
            <Card.Body>
             <Card.Title>Card 2</Card.Title>
             <Card.Text>Content for Card 2</Card.Text>
            </Card.Body>
           </Card>
          </Col>

          <Col md={3}>
           <Card>
            <Card.Body>
             <Card.Title>Card 3</Card.Title>
             <Card.Text>Content for Card 3</Card.Text>
            </Card.Body>
           </Card>
          </Col>

          <Col md={3}>
           <Card>
            <Card.Body>
             <Card.Title>Card 4</Card.Title>
             <Card.Text>Content for Card 4</Card.Text>
            </Card.Body>
           </Card>
          </Col>
         </Row>
        </div>
       )}
       {activeTab === 'profile' && (
        <div>
         <div className="profile-header w-100">
          <Container fluid>
           <Row>
            <Col md={10} lg={7}>
             <h1 className="profile-title">Hello User</h1>
             <p className="profile-description">
              This is a profile page. This is a profile page. This is a profile
              page. This is a profile page. This is a profile page. This is a
              profile page.
             </p>
            </Col>
           </Row>
          </Container>
         </div>

         <Container className="profile-content">
          <Row>
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
             <Form></Form>

             <h4>Contact Information</h4>
             <Form></Form>

             <h4>About me</h4>
             <Form></Form>
            </div>
           </Col>
           <Col md={4} className="order-sm-1 order-md-2">
            <div className="profile-info">
             <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt="User"
              className="user-image"
             />
             <h2>User Name</h2>
             <p>
              A short introduction about the user. A short introduction about
              the user. A short introduction about the user. A short
              introduction about the user.
             </p>
             <Row>
              <Col md={12} sm={12}>
               <div className="social-icons mt-5"></div>
              </Col>
             </Row>
            </div>
           </Col>
          </Row>
         </Container>
        </div>
       )}
       {activeTab == 'deals' && <Deals />}
      </Col>
     </Row>
    </Col>
   </Row>
  </Container>
 )
}
