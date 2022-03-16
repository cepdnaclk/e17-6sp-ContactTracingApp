import React from 'react';
import { Navbar, Container, Row, Col, Alert } from 'react-bootstrap';
import { Login } from '../auth/login';
import { Register } from '../auth/register';

export const Landing = (props) => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="mt-4">
          <h2>Hello!</h2>
          <Alert variant={'primary'}>Login to access admin privillages</Alert>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} className="mt-4">
            <Login {...props}/>
          </Col>
          <Col lg={6} md={6} sm={12} className="mt-4">
            <Register {...props}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
