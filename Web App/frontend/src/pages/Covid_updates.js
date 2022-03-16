import React from 'react'
import { Navbar, Container, Row, Col, Alert, Button } from 'react-bootstrap';

export const Covid_updates = (props) => {
  return (
    <div className='container'>
    <h1   >Covid Updates</h1>
    <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>Welcome !</h2>
            <Alert variant={'primary'}>information</Alert>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
