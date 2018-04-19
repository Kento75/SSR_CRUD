// package import
import React from 'react';
import { Route } from 'react-router';

// components import
import App from './components/App';


export default (store) => {
  return(
    <Route path="/" component={App}>
    </Route>
  );
};