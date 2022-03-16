import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Covid-19',
    path: '/',
    icon: "",
    cName: "h4"
  },
  {
    title: 'Hotspots',
    path: '/Covid-hotspots',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Visualisations',
    path: '/Covid-vis',
    icon: <FaIcons.FaChartPie />,
    cName: 'nav-text'
  },
  {
    title: 'Updates',
    path: '/Covid-upd',
    icon: <FaIcons.FaFlag />,
    cName: 'nav-text'
  },
  {
    title: 'Track patients',
    path: '/Covid-track',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Predictions',
    path: '/predictions',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'CKDU',
    path: '/',
    icon: "",
    cName: "h4"
  },
  {
    title: 'Hotspots',
    path: '/CKDU-hotspots',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Visualisations',
    path: '/CKDU-vis',
    icon: <FaIcons.FaChartPie />,
    cName: 'nav-text'
  },
  {
    title: 'Updates',
    path: '/CKDU-updates',
    icon: <FaIcons.FaFlag />,
    cName: 'nav-text'
  },
  {
    title: 'Track patients',
    path: '/CKDU-track',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Predictions',
    path: '/predictions',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Authenticate',
    path: '/',
    icon: "",
    cName: "h4"
  },
  {
    title: 'Login / Register',
    path: '/Landing',
    icon: <IoIcons.IoMdLogIn />,
    cName: 'nav-text'
  },
];