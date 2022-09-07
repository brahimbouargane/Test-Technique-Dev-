import React from "react";
import {BrowserRouter as  Router,Switch,Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Posts from './components/Posts'
import Navbar from './components/Navbar'

export const AuthenticatedRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/posts">
          <Posts/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    
 
  );
};

export const UnauthenticatedRoutes = () => {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/posts">
        <Posts/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  </Router>
  );
};
