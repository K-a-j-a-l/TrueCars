import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style.css';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      designation: 'CEO, Company ABC',
    },
    {
      rating: 4,
      message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith',
      designation: 'CTO, Company XYZ',
    },
    {
      rating: 5,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      designation: 'CEO, Company ABC',
    },
    {
      rating: 5,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      designation: 'CEO, Company ABC',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <div className="about-container p-5">
      <Row>
        <Col>
          <p className="about-paragraph" style={{ textAlign: 'left' }}>
            Customer Feedback
          </p>
          <h2 className="about-heading mb-5">What are Customers Are Saying</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Row>
                  <Col sm={12} md={4} xl={3}>
                    <Card className="testimonial-card" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                      <Card.Body>
                        <div>
                          {[...Array(testimonial.rating)].map((star, i) => (
                            <FaStar key={i} color="#ffc107" />
                          ))}
                        </div>
                        <Card.Text className="mt-3">{testimonial.message}</Card.Text>
                        <div className="d-flex justify-content-center">
                          <Card.Title className="mt-3">
                            <h6>-{testimonial.author}</h6>
                          </Card.Title>
                          <Card.Subtitle className="mt-3 mx-2 text-muted">
                            <p style={{ fontSize: '0.8rem' }}>{testimonial.designation}</p>
                          </Card.Subtitle>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;