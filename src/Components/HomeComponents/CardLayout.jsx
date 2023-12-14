import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'

const CardLayout = ({ name, image }) => {
 return (
  <div className="card-container">
   <Card style={{ width: '10.5rem' }} className="card align-items-center">
    <Row>
     <Col md={2}>
      <Card.Img variant="left" className="icons mr-2" src={image} />{' '}
     </Col>{' '}
     <Col md={10}>
      <Card.Body>
       <Card.Title> {name} </Card.Title>{' '}
      </Card.Body>{' '}
     </Col>{' '}
    </Row>{' '}
   </Card>{' '}
  </div>
 )
}

CardLayout.propTypes = {
 name: PropTypes.string.isRequired,
 image: PropTypes.string.isRequired,
}

export default CardLayout
