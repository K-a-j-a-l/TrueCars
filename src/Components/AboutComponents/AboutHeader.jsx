import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../style.css';

const AboutComponent = () => {
  return (
    <div className="about-container">
      <Row>
        <Col xs={12} md={6} className="about-details">
          <div>
            <h2 className="about-heading">About Us</h2>
	    <div className="google-ratings">
		<div className="google-icon">
              	   <span>
               		<i className="fa-brands fa-google"></i>
              	   </span>
            	</div>
            	<div className="ratings-symbol">
              	   <span><i class="fa-solid fa-star"></i></span>
	      	   <span><i class="fa-solid fa-star"></i></span>
              	   <span><i class="fa-solid fa-star"></i></span>
	      	   <span><i class="fa-solid fa-star"></i></span>
              	   <span><i class="fa-solid fa-star"></i></span>
            	</div>
	    </div>
            <div className="ratings-info">
              <p>Reviews: 100</p>
	      <span className="vertical-line"></span>
              <p>Rating: 4.5</p>
            </div>
          </div>
        </Col>
	<Col xs={12} md={6}>
          <Image src="https://media.istockphoto.com/id/1493574434/photo/car-rushes-along-the-highway-at-sunset-low-angle-side-view.webp?s=1024x1024&w=is&k=20&c=C6fkK2gq-Ep3pHBcvRU0KHrk86F6c3WzV_ZM6KNonq0=" alt="About Us" className="about-image" fluid />
        </Col> 
      </Row>
    </div>
  );
};

export default AboutComponent;
