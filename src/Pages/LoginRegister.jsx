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
  Modal,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarHeader from '../Components/Navbar'
import Footer from '../Components/Footer'

export const showToast = (type, text, title) => {
  toast[type](text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

function LoginRegister() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showOtpModal, setShowOtpModal] = useState(false)
  const [selectedRoleModal, setSelectedRoleModal] = useState(false)
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const [pincode, setPincode] = useState('248001')
  const [role, setRole] = useState('USER')
  const [forgotPassword, setForgotPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('login')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('');
  const [roles, setRoles] = useState([]);

  const handleForgotPassword = () => {
    setForgotPassword(true)
  }

  const handleOtpInputChange = (e) => {
    setOtp(e.target.value)
  }



  const handleRoleSelectionSubmit = () => {
    console.log(roles);
    console.log(selectedRole);
    const selectedRoleToken = roles.find((role) => role.role === selectedRole)?.token;
    if (selectedRoleToken) {
      sessionStorage.setItem('token', selectedRoleToken);
      sessionStorage.setItem('role', selectedRole);
      navigate('/AdminPanel');
    } else {
      showToast('error', 'Role Token not found', 'Please try again.');
    }
  };

  const handleOtpSubmit = () => {
    var otpVerificationHeaders = new Headers();
    otpVerificationHeaders.append('Content-Type', 'application/json');

    var otpVerificationRaw = JSON.stringify({
      phoneNumber: phone,
      otp: parseInt(otp),
    });

    var otpVerificationRequestOptions = {
      method: 'POST',
      headers: otpVerificationHeaders,
      body: otpVerificationRaw,
      redirect: 'follow',
    };

    fetch('http://20.235.246.99:8000/api/v1/verifyOTP', otpVerificationRequestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200 && result.status === 'success') {
          setShowOtpModal(false);
          if (result.data.length > 1) {
            setRoles(result.data);
            setSelectedRole(null);
            setSelectedRoleModal(true);
          } else {
            const token = result.data[0].token;
            sessionStorage.setItem('token', token);
            navigate("/AdminPanel")
          }
        } else {
          showToast('error', 'OTP Verification Failed', 'Please enter the correct OTP.');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

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
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.statusCode === 200 && result.status === 'success') {

          if (!result.data[0].phoneNumber.verified) {
            showToast("success", "OTP sent successfully", "");
            handleRegisterClick();
          } else {
            if (result.data.length == 1) {
              sessionStorage.setItem('token', result.data[0].token);
              navigate('../AdminPanel')
            } else {
              setRoles(result.data);
              setSelectedRole(null);
              setSelectedRoleModal(true);
            }
          }

        } else {
          showToast('error', 'Wrong User Id or password', 'Try Again!!');
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
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.statusCode === 200 && result.status === 'success') {
          showToast('success', 'User Registered Successfully', '');
          setActiveTab('login');
          handleRegisterClick();
        } else {
          showToast('error', 'User already registered', '');
        }
      })
      .catch((error) => console.error('Error:', error))
  }

  const handleRegisterClick = () => {
    var otpSendingHeaders = new Headers();
    otpSendingHeaders.append('Content-Type', 'application/json');
    var otpSendingRaw = JSON.stringify({
      phoneNumber: phone,
    });

    var otpSendingRequestOptions = {
      method: 'POST',
      headers: otpSendingHeaders,
      body: otpSendingRaw,
      redirect: 'follow',
    };

    fetch('http://20.235.246.99:8000/api/v1/sendOTP', otpSendingRequestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200 && result.status === 'success') {
          setShowOtpModal(true);
        } else {
          showToast('error', 'OTP Sending Failed', 'Please try again.');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (forgotPassword) {
      setMessage(`Password reset link sent to ${phone}`)
    } else {
      setMessage(`Logging in with phone: ${phone} and password: ${password}`)
    }
  }

  return (
    <>
      <NavbarHeader />
      <ToastContainer />
      <div className="loginContainer">
        <div>
          <Row>
            <Col md={6} sm={0} className="d-none d-sm-block">
              <Container className="sidebar">
                <h1 className="mt-5"> TrueCars </h1>{' '}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Soluta, vel
                  nihil vitae molestiae, nisi alias odit beatae totam repellat odio
                  itaque laboriosam tempora necessitatibus labore dolores eligendi quis
                  officia earum!Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Soluta, vel nihil vitae molestiae, nisi alias odit beatae totam
                  repellat odio itaque laboriosam tempora necessitatibus labore dolores
                  eligendi quis officia earum!Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.Soluta, vel nihil vitae molestiae, nisi alias odit
                  beatae totam repellat odio itaque laboriosam tempora necessitatibus
                  labore dolores eligendi quis officia earum!Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.Soluta, vel nihil vitae molestiae, nisi
                  alias odit beatae totam repellat odio itaque laboriosam tempora
                  necessitatibus labore dolores eligendi quis officia earum!{' '}
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
        </div>
        <Modal show={showOtpModal} onHide={() => setShowOtpModal(false)}>
          <Modal.Header
            closeButton
            style={{
              backgroundColor: '#343a40',
              color: 'white',
              borderBottom: '1px solid #dee2e6',
            }}
          >
            <Modal.Title style={{ fontSize: '1.5rem' }}>Enter OTP</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '20px' }}>
            <Form>
              <Form.Group controlId="formOtp" className="mb-4">
                <Form.Control
                  className="inpField"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleOtpInputChange}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                className="btnSubmit"
                onClick={handleOtpSubmit}
              >
                Submit OTP
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={selectedRoleModal} onHide={() => setSelectedRoleModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Select Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formRole">
              <Form.Label>Select your role:</Form.Label>
              <Form.Control
                as="select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
              <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role.role} value={role.role}>
                    {role.role}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => handleRoleSelectionSubmit()}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  )

}

export default LoginRegister
