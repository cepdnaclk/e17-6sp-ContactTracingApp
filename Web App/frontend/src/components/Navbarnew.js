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




export const Navbarnew = (props)=> {

  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar); 
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
    <Navbar  >
        <div>
          
        </div>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="topcorner" >
          <label className="ml-4 text-white" style={{}}><FaUserCircle size={21}/></label>
          <label className="ml-1 text-white">{user.firstName+" "+user.lastName}</label>
          <Button className="ml-4" variant="outline-light" onClick={callLogout}>Log Out</Button>
        </div>
      </Navbar>
      

      </>
  )
}

export default Navbarnew