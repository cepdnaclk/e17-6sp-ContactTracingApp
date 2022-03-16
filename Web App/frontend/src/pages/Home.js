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
    <div className='container'>
    <h1   >Home</h1>
    <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>Welcome {user.firstName}!</h2>
            <Alert variant={'primary'}>Contact Tracing App</Alert>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col className="mt-4">
            <h2>News Feeds </h2>
            <Alert variant={'primary'}>Contact tracing slows the spread of COVID-19</Alert>
            <ul>
              <li>Helping people diagnosed with COVID-19 get referrals for services and resources they may need to safely isolate.</li>
              <li>Notifying people who have come into close contact with someone diagnosed with COVID-19 and helping them determine what steps to take, depending on their vaccination status and history of prior infection with SARS-CoV-2 (the virus that causes COVID-19). Follow-up may include testing, quarantine, and wearing a well-fitted mask.</li>
              <li>Discussions with public health workers are confidential. This means that your personal and medical information will be kept private and only shared with those who may need to know, like your healthcare provider.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
      
    </>
  );
};

export default Home
