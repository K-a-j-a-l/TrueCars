import { Container, Row, Col } from 'react-bootstrap'
import '../style.css'
import Login from '../Components/LoginComponents/Login'
import LoginSidebar from '../Components/LoginComponents/LoginSidebar'

function LoginRegister() {
 return (
  <div className="loginContainer">
   <Container>
    <Row>
     <Col md={6} sm={0} className="d-none d-sm-block">
      <LoginSidebar />
     </Col>{' '}
     <Col md={6} sm={12} className="borderless">
      <Login />
     </Col>{' '}
    </Row>{' '}
   </Container>{' '}
  </div>
 )
}

export default LoginRegister
