import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home';
import { ProtectedRoute } from './auth/protected-route';
import { UnProtectedRoute } from './auth/unprotected-route';
import './App.css';
import { Landing } from './pages/Landing';
import  {Covid_vis}  from './pages/Covid_vis';
import  {Covid_Hotspots}  from './pages/Covid_Hotspots';
import  {Covid_updates}  from './pages/Covid_updates';
import  {Covid_track_patients}  from './pages/Covid_track_patients';

import  {CKDU_vis}  from './pages/CKDU_vis';
import  {CKDU_Hotspots}  from './pages/CKDU_Hotspots';
import  {CKDU_updates}  from './pages/CKDU_updates';
import  {CKDU_track_patients}  from './pages/CKDU_track_patients';

import {Navbarnew} from './components/Navbarnew';

function App() {
  return (
    // Router Code
    
    <BrowserRouter>
          <Navbarnew  />
        <Switch>
          <Route path='/' exact  component={Home}/>
          <Route path='/Covid-hotspots' component={Covid_Hotspots}/>
          <Route path='/Covid-vis' component={Covid_vis}/>
          <Route path='/Landing' component={Landing}/>
          <Route path='/Covid-upd' component={Covid_updates}/>
          <Route path='/Covid-updates' component={Covid_updates}/>
          <ProtectedRoute path='/Covid-track' component={Covid_track_patients}/>

          <Route path='/CKDU-vis' component={CKDU_vis}/>
          <Route path='/CKDU-hotspots' component={CKDU_Hotspots}/>
          <Route path='/CKDU-updates' component={CKDU_updates}/>
          <ProtectedRoute path='/CKDU-track' component={CKDU_track_patients}/>
     
         </Switch>
          {/* <UnProtectedRoute 
              path='/'
              exact 
              strict
              component = {Home}
            /> */}
        {/* <Route 
            path='/anotherpage'
            exact 
            strict
            component = {AnotherPage}
          /> */}
       

        
    </BrowserRouter>
    
  );
};
export default App;
