import React from 'react'
import { Navbar, Container, Row, Col, Alert, Button } from 'react-bootstrap';

export const CKDU_Hotspots = (props) => {
  return (
    <div className='container'>
    <h1   >CKDU Hotspots</h1>
    <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>Welcome !</h2>
            <Alert variant={'primary'}>CKDU Spread</Alert>
            <iframe style={{background: "#FFFFFF"}} width="1200" height="800" src="https://charts.mongodb.com/charts-contacttracingapplication-nwmba/embed/charts?id=62299fd6-1200-489f-8082-e5c186b7bb76&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
