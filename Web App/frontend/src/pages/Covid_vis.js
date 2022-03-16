import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Navbar, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import auth from '../auth/auth';
import list from '../data/list'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../components/Sidebardata';
import '../components/Navbar.css';
import '../components/Navbarnew';
import { Navbarnew } from '../components/Navbarnew';


export const Covid_vis = (props) => {
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
    <div className='container'>
    <h1   >COVID Visualisations</h1>
    <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>Welcome !</h2>
            <Alert variant={'primary'}>Covid19 Variation with Date</Alert>
            <iframe style={{background: "#FFFFFF"}} width="1200" height="800" src="https://charts.mongodb.com/charts-contacttracingapplication-nwmba/embed/charts?id=62309b64-9853-47e0-8a44-03d74a95662d&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            <Alert variant={'primary'}>Covid19 Variation with Date</Alert>
            <iframe style={{background: "#FFFFFF"}} width="1200" height="800" src="https://charts.mongodb.com/charts-contacttracingapplication-nwmba/embed/charts?id=6230a40b-56bd-4de4-8568-d8c93e28130b&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Covid_vis
