import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Navbar, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import auth from '../auth/auth';
import list from '../data/list'

export const Home = (props) => {
  // History hook
  const history = useHistory();

  // User information hook
  const [user, setUser] = useState({
    "id": "",
    "email": "",
    "is_active": true,
    "is_superuser": false,
    "firstName": "",
    "lastName": ""
  });

  const [dataset,setlist] = useState({
    "Location":"",
    "Infected":"",
    "Recoverd":"",
    "Deaths":"",
    "Date":""
  })

  useEffect(() => {
    const fetchData = async () => {
      if (auth.isAuthenticated()){
        const result = await list.getList();
        setlist(result);
      };
    };
    fetchData();
  // eslint-disable-next-line
  }, []);

  // Fetch user information on page load
  useEffect(() => {
    const fetchData = async () => {
      if (auth.isAuthenticated()){
        const result = await auth.getUser();
        setUser(result);
      };
    };
    fetchData();
  // eslint-disable-next-line
  }, []);

  // Function to call logout
  const callLogout = async () => {
    auth.logout(() => {
      history.push('/');
    });
  };
  
  return (
    <>
      <Navbar className="align-middle justify-content-between" bg="dark" variant="dark">
        <div>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={require("../images/logo.svg")}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <Navbar.Brand><strong>Project</strong></Navbar.Brand>
          </Navbar.Brand>
        </div>
        <div>
          <label className="ml-4 text-white" style={{}}><FaUserCircle size={21}/></label>
          <label className="ml-4 text-white">{user.firstName+" "+user.lastName+dataset.Deaths}</label>
          <Button className="ml-4" variant="outline-light" onClick={callLogout}>Log Out</Button>
        </div>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>Welcome {user.firstName}!</h2>
            <Alert variant={'primary'}>You have been successfully authenticated.</Alert>
          </Col>
        </Row>
      </Container>

      <div class="card" >
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  );
};
