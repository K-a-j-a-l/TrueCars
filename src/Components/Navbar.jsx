import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
 Button,
 Container,
 Form,
 Nav,
 Navbar,
 NavDropdown,
} from 'react-bootstrap'
import '../style.css'

function NavbarHeader() {
  const navigate = useNavigate()
  const handleLoginClick=()=>{
    navigate('/login')
  }
  const handleListingClick=()=>{
    navigate("/Listings")
  }
 return (
  <Navbar
   expand="lg"
   className="bg-black text-white justify-content-evenly navbar-dark bar"
  >
   <Container>
    <Navbar.Brand href="#" style={{ fontSize: '30px' }}>
     TrueCar
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
     >
      <NavDropdown title="New" id="navbarScrollingDropdown">
       <NavDropdown.Item href="#action1" onClick={handleListingClick}>Car Listings</NavDropdown.Item>
       <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Used" id="navbarScrollingDropdown">
       <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
       <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Electric" id="navbarScrollingDropdown">
       <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
       <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Research" id="navbarScrollingDropdown">
       <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
       <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#">Sell Your Car</Nav.Link>
     </Nav>
     <Form className="d-flex mx-2">
      <Form.Control
       type="search"
       placeholder="Search"
       className="me-2"
       aria-label="Search"
      />
      <Button variant="success">Search</Button>
     </Form>
     <div
      className="border-right d-lg-block d-none"
      style={{ height: '30px', backgroundColor: 'white', width: '2px' }}
     ></div>
     <Nav.Link href="#" style={{ marginLeft: '10px' }} onClick={handleLoginClick}>
      Sign Up
      <i
       className="fa-solid fa-user"
       style={{
        fontSize: '1rem',
        borderRadius: '50%',
        border: '1px solid white',
        padding: '5px',
        backgroundColor: 'white',
        color: 'black',
        marginLeft: '5px',
       }}
      ></i>
     </Nav.Link>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 )
}

export default NavbarHeader
