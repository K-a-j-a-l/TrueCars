import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css';

function NavbarHeader() {
  return (
    <Navbar expand="lg" className="bg-black text-white justify-content-between navbar-dark bar">
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
              <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
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
            className="border-right mx-2 d-lg-block d-none"
            style={{ height: '30px', backgroundColor: 'white', width: '2px' }}
          ></div>
          <Nav.Link href="#" className="d-lg-block d-none">
            Sign Up
          </Nav.Link>
          <i
            className="fa-solid fa-user d-lg-block d-none"
            style={{
              fontSize: '1rem',
              borderRadius: '50%',
              border: '1px solid white',
              margin: '7px',
              padding: '5px',
            }}
          ></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
