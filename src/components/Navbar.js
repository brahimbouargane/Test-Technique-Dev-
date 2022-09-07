import React from 'react'
import { BrowserRouter as Link, Router } from "react-router-dom";
import '../App.css';
import { useAuth } from '../auth/auth-context';
import Home from './Home';
import Posts from './Posts';
import Login from './Login';



export default function Navbar() {
  const {loggedIn} = useAuth()
  const {logout} = useAuth();
  return (
    <>
    {loggedIn?
    
      <div className='navbar'>
      <a><Link   to="/" >Home</Link></a>
       <ul>
          <li>
            <a><Link  to="/posts">Posts</Link></a>
          </li>
          <li>
           <a><Link  onClick={logout}  to="/">LogOut</Link></a>
          </li>
        </ul>
    </div>
    
    :
    
    <div className='navbar'>
    <a><Link to="/">Home</Link></a>
     <ul>
        <li>
         <a> <Link to="/posts">Posts</Link></a>
        </li>
        <li>
          <a><Link  to="/login">Login</Link> </a>
        </li>
      </ul>
  </div>
  
    }
   </>
    
  )
}
