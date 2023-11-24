import { Container, Row, Col } from 'react-bootstrap'
import '../style.css'

const Footer = () => {
 return (
  <footer className="footer">
   <Container>
    <Row>
     <Col md={3} sm={6}>
      {' '}
      <h5> Products </h5>{' '}
      <ul>
       <li>
        {' '}
        <a href="#"> Used </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> New </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> Sell Your Car </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> EV </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> Military </a>{' '}
       </li>{' '}
      </ul>{' '}
     </Col>{' '}
     <Col md={3} sm={6}>
      <h5> Resources </h5>{' '}
      <ul>
       <li>
        {' '}
        <a href="#"> Blog </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> FAQ </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> Contact Us </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> Contact </a>{' '}
       </li>{' '}
      </ul>{' '}
     </Col>{' '}
     <Col md={3} sm={6}>
      <h5> Work With TrueCar </h5>{' '}
      <ul>
       <li>
        {' '}
        <a href="#"> Dealers </a>{' '}
       </li>{' '}
       <li>
        {' '}
        <a href="#"> Partners </a>{' '}
       </li>{' '}
      </ul>{' '}
     </Col>{' '}
     <Col md={3} sm={6}>
      <h5> About </h5>{' '}
      <ul>
       <li>
        {' '}
        <a href="#"> TrueCar inc </a>{' '}
       </li>{' '}
       <li>
        <a href="#"> Team </a>{' '}
       </li>{' '}
       <li>
        <a href="#"> Careers </a>{' '}
       </li>{' '}
       <li>
        <a href="#"> Press </a>{' '}
       </li>{' '}
       <li>
        <a href="#"> Developers </a>{' '}
       </li>{' '}
       <li>
        <a href="#"> Investors </a>{' '}
       </li>{' '}
      </ul>{' '}
     </Col>{' '}
    </Row>{' '}
    <Row>
     <Col md={6} sm={12}>
      <div className="social-icons">
       <a href="#" target="_blank" rel="noopener noreferrer">
        {' '}
        <i className="fa-brands fa-square-facebook"> </i>{' '}
       </a>{' '}
       <a href="#" target="_blank" rel="noopener noreferrer">
        {' '}
        <i className="fa-brands fa-square-twitter"> </i>{' '}
       </a>{' '}
       <a href="#" target="_blank" rel="noopener noreferrer">
        {' '}
        <i className="fa-brands fa-square-instagram"> </i>{' '}
       </a>{' '}
       <a href="#" target="_blank" rel="noopener noreferrer">
        {' '}
        <i className="fa-brands fa-linkedin"> </i>{' '}
       </a>{' '}
      </div>{' '}
     </Col>{' '}
    </Row>{' '}
    <div className="row">
     <Row className="text-center">
      <Col>
       <p>
        For questions about the TrueCar Auto Buying Service please call{' '}
        <a href="#"> 1 - 888 - 878 - 3227 </a>{' '}
       </p>{' '}
       <p>
        Certified Dealers are contractually obligated by TrueCar to meet certain
        customer service requirements and complete the TrueCar Dealer
        Certification Program.{' '}
       </p>{' '}
       <p>
        TrueCar does not broker, sell, or lease motor vehicles.Unless otherwise
        noted, all vehicles shown on this website are offered for sale by
        licensed motor vehicle dealers.All vehicles are subject to prior sale.By
        accessing this website, you agree to the TrueCar Terms of Service and
        Privacy Policy.{' '}
       </p>{' '}
       <p>
        <a href="#"> Terms of Service </a> <a href="#"> Privacy Policy </a>{' '}
        <a href="#"> California Privacy </a>{' '}
        <a href="#"> Do Not Sell Or Share My Personal Information </a>{' '}
       </p>{' '}
       <p className="copyright">
        {' '}
        © and™ TrueCar, Inc.All rights reserved.Vehicle photos© Evox Images©
        1986 - 2023 Chrome Data Solutions, LP.{' '}
       </p>{' '}
      </Col>{' '}
     </Row>{' '}
    </div>{' '}
   </Container>{' '}
  </footer>
 )
}

export default Footer
