import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <div>
       <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Content for Card 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Content for Card 2</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>Content for Card 3</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>Content for Card 4</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
