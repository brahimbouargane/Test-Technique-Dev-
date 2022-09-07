import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useAuth } from '../auth/auth-context';
import {Link} from 'react-router-dom'
import '../App.css'

export default function Posts() {
  const {loggedIn} = useAuth()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        setPosts(res.data)
        
    })
    .catch(err => {
      console.log(err)
    }) 
  },[])
  return (
   
    <div className='card-container'>
    {loggedIn ?
     posts.map(post => (
      <div className='card' id={post.id}>
        <h1>User Id: {post.userId}</h1>
        <h2>Title: {post.title}</h2>
        <p>Body: {post.body}</p>
      </div>
    )) :
    <div className='middle'>
      <h2>You need to login to see posts</h2>
      <button><Link to={'/login'} style={{color:'#ffff'}}>Log in</Link></button>
    </div>
    }
   
    </div>
  )
}
