import React from 'react'
import Login from './components/Login';
import './App.css';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import { useAuth } from './auth/auth-context';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes";
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  const {loggedIn} = useAuth()
  
  return ( loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />)
}


