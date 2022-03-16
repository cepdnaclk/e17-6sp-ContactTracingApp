import React from 'react'
import { Navbar, Container, Row, Col, Alert, Button } from 'react-bootstrap';

export const CKDU_vis = (props) => {
  return (
    <div className='container'>
    <h1   >CKDU Visualisations</h1>
    <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>Welcome !</h2>
            <Alert variant={'primary'}>CKDU Spread</Alert>
            <iframe style={{background: "#FFFFFF"}} width="1200" height="600" src="https://charts.mongodb.com/charts-contacttracingapplication-nwmba/embed/charts?id=6221de97-d551-48f9-8ffe-1e63b9c9bff8&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
