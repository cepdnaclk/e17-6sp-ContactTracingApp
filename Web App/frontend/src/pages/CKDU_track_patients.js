import React from 'react'
import { Navbar, Container, Row, Col, Alert, Button } from 'react-bootstrap';

export const CKDU_track_patients = (props) => {
  return (
    <div className='container'>
    <h1   >Patient Tracking Machanism</h1>
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