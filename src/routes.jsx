// package import
import React from 'react';
import { Route } from 'react-router';

// components import
import App from './components/App';
import HelloWorld from './components/HelloWorld';


export default (store) => {
  return(
    <Route path="/" component={App}>
      <Route path="helloworld" component={HelloWorld} />
    </Route>
  );
};