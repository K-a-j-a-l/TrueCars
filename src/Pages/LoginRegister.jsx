import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
 Container,
 Row,
 Col,
 Form,
 Button,
 Alert,
 Tabs,
 Tab,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Swal from 'sweetalert2';

function LoginRegister() {
 const [phone, setPhone] = useState('')
 const [password, setPassword] = useState('')
 const [name, setName] = useState('')
 const [pincode, setPincode] = useState('248001')
 const [role, setRole] = useState('USER')
 const [forgotPassword, setForgotPassword] = useState(false)
 const [activeTab, setActiveTab] = useState('login')
 const [message, setMessage] = useState('')
 const navigate = useNavigate()

 const handleForgotPassword = () => {
  setForgotPassword(true)
 }

 const login = () => {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var raw = JSON.stringify({
   userId: phone,
   password: password,
  })

  var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow',
  }

  fetch('http://20.235.246.99:8000/api/v1/login', requestOptions)
   .then((response) => response.json()) // Parse the response as JSON
   .then((result) => {
    console.log(result)
    if (result.statusCode === 200 && result.status === 'success') {
     navigate('../AdminPanel')
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Wrong User Id or password',
            text: 'Try Again!!',
        });
    }
   })
   .catch((error) => console.error('Error:', error))
 }

 const register = () => {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify({
   name: name,
   phoneNumber: phone,
   password: password,
   pinCode: pincode,
   role: role,
  })

  var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow',
  }

  fetch('http://20.235.246.99:8000/api/v1/register', requestOptions)
   .then((response) => response.json()) // Parse the response as JSON
   .then((result) => {
    console.log(result)
    if (result.statusCode === 200 && result.status === 'success') {
        Swal.fire({
            icon: 'success',
            title: 'User Registered Successfully',
        });
     setActiveTab('login')
    } else {
        Swal.fire({
            icon: 'error',
            title: 'User already registered',
        });
    }
   })
   .catch((error) => console.error('Error:', error))
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if (forgotPassword) {
   setMessage(`Password reset link sent to ${phone}`)
  } else {
   setMessage(`Logging in with phone: ${phone} and password: ${password}`)
  }
 }

 return (
  <div className="loginContainer">
   <Container>
    <Row>
     <Col md={6} sm={0} className="d-none d-sm-block">
      <Container className="sidebar">
       <h1 className="mt-5"> TrueCars </h1>{' '}
       <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Soluta, vel
        nihil vitae molestiae, nisi alias odit beatae totam repellat odio itaque
        laboriosam tempora necessitatibus labore dolores eligendi quis officia
        earum!Lorem ipsum dolor sit amet, consectetur adipisicing elit.Soluta,
        vel nihil vitae molestiae, nisi alias odit beatae totam repellat odio
        itaque laboriosam tempora necessitatibus labore dolores eligendi quis
        officia earum!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.Soluta, vel nihil vitae molestiae, nisi alias odit beatae totam
        repellat odio itaque laboriosam tempora necessitatibus labore dolores
        eligendi quis officia earum!Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.Soluta, vel nihil vitae molestiae, nisi alias odit
        beatae totam repellat odio itaque laboriosam tempora necessitatibus
        labore dolores eligendi quis officia earum!{' '}
       </p>{' '}
      </Container>
     </Col>
     <Col md={6} sm={12} className="borderless">
      <Container className="frmLogin">
       <Row className="d-flex justify-content-evenly">
        <Col lg={6}>
         <h3 className="text-center mb-5">
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
           <Tab eventKey="login" title="Login">
            <Form>
             <Form.Group controlId="FormPhone" className="mb-4">
              <Form.Control
               className="inpField"
               type="tel"
               placeholder="Enter your Phone Number"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               required
              />
             </Form.Group>
             {!forgotPassword && (
              <Form.Group controlId="formPassword" className="mb-4">
               <Form.Control
                className="inpField"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={!forgotPassword}
                disabled={forgotPassword}
               />
              </Form.Group>
             )}
             <Button
              variant="primary"
              type="button"
              className="btnSubmit"
              onClick={login}
             >
              {forgotPassword ? 'Send Me Mail' : 'Submit'}
             </Button>
             {!forgotPassword && (
              <Button
               variant="none"
               className="btnForgotPassword ml-auto"
               onClick={handleForgotPassword}
              >
               Forgot Password?
              </Button>
             )}
            </Form>
           </Tab>
           <Tab eventKey="register" title="Register">
            <Form>
             <Form.Group controlId="formName" className="mb-4">
              <Form.Control
               className="inpField"
               type="text"
               placeholder="Enter your name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required={!forgotPassword}
               disabled={forgotPassword}
              />
             </Form.Group>
             <Form.Group controlId="FormPhone" className="mb-4">
              <Form.Control
               className="inpField"
               type="tel"
               placeholder="Enter your Phone Number"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               required
              />
             </Form.Group>
             <Form.Group controlId="formPassword" className="mb-4">
              <Form.Control
               className="inpField"
               type="password"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required={!forgotPassword}
               disabled={forgotPassword}
              />
             </Form.Group>
             <Button
              variant="primary"
              type="button"
              className="btnSubmit"
              onClick={register}
             >
              Register
             </Button>
            </Form>
           </Tab>
          </Tabs>
         </h3>
         {message && (
          <Alert variant="info" className="mt-3">
           {message}
          </Alert>
         )}
        </Col>
       </Row>
      </Container>
     </Col>
    </Row>
   </Container>
  </div>
 )
}

export default LoginRegister
