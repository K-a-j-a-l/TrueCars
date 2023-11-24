import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import '../style.css'

function Login() {
 const [showLogin, setShowLogin] = useState(true)
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [name, setName] = useState('')
 const [forgotPassword, setForgotPassword] = useState(false)
 const [message, setMessage] = useState('')

 const handleToggleForm = () => {
  setShowLogin(!showLogin)
  setEmail('')
  setPassword('')
  setName('')
  setForgotPassword(false)
  setMessage('')
 }

 const handleForgotPassword = () => {
  setForgotPassword(true)
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if (forgotPassword) {
   setMessage(`Password reset link sent to ${email}`)
  } else if (showLogin) {
   setMessage(`Logging in with email: ${email} and password: ${password}`)
  } else {
   setMessage(
    `Registering with name: ${name}, email: ${email}, and password: ${password}`
   )
  }
 }

 return (
  <Container className="frmLogin">
   <Row className="justify-content-center">
    <Col lg={6}>
     <h2 className="text-center"> Sign Into Your Account </h2>{' '}
     <div className="btnHeader m-5 justify-content-center align-items-center">
      <Button
       variant="none"
       className={`btn ${showLogin && !forgotPassword ? 'active' : ''}`}
       onClick={handleToggleForm}
      >
       Login{' '}
      </Button>{' '}
      <Button
       variant="none"
       className={`btn ${!showLogin && !forgotPassword ? 'active' : ''}`}
       onClick={handleToggleForm}
      >
       Register{' '}
      </Button>{' '}
     </div>{' '}
     <Form onSubmit={handleSubmit}>
      {' '}
      {!showLogin && !forgotPassword && (
       <Form.Group controlId="formName" className="mb-3 mt-5">
        <Form.Control
         className="inpField"
         type="text"
         placeholder="Enter your name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
        />
       </Form.Group>
      )}{' '}
      {(showLogin || forgotPassword) && (
       <Form.Group controlId="formEmail" className="mb-3">
        <Form.Control
         className="inpField"
         type="email"
         placeholder="Enter your email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
        />
       </Form.Group>
      )}{' '}
      {!forgotPassword && (
       <Form.Group controlId="formPassword" className="mb-3">
        <Form.Control
         className="inpField"
         type="password"
         placeholder="Enter your password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
        />
       </Form.Group>
      )}{' '}
      <Button variant="primary" type="submit" className="btnSubmit">
       {' '}
       {forgotPassword ? 'Send Me Mail' : showLogin ? 'Login' : 'Register'}{' '}
      </Button>{' '}
      <Button
       variant="none"
       className="btnForgotPassword ml-auto"
       onClick={handleForgotPassword}
      >
       {forgotPassword ? '' : 'Forgot Password?'}{' '}
      </Button>{' '}
     </Form>{' '}
     {message && (
      <Alert variant="info" className="mt-3">
       {' '}
       {message}{' '}
      </Alert>
     )}{' '}
    </Col>{' '}
   </Row>{' '}
  </Container>
 )
}

export default Login
