import React from 'react';
import { Route } from 'react-router-dom';
import auth from './auth';
import { Landing } from '../pages/Landing';

// ProtectedRoute template to define any new protected routes
export const UnProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={props => {
        // Goto the concerned route when authenticated
        return <Component {...props}/>
        
        // Goto the default login page when not authenticated
        
      }}
    />
  );
};