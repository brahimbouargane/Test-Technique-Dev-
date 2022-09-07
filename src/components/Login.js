import React from 'react'
import { useForm } from 'react-hook-form'
import '../App.css';
import { useAuth } from '../auth/auth-context';


export default function Login() {
  const {login} = useAuth();
  const {register, handleSubmit,formState:{errors}} = useForm();
  const onSubmit = (data) => {
    localStorage.setItem('Email', data.email)
    localStorage.setItem('Password', data.password)
    
  };
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='login'>Log In</h1>
        <label>Email </label>   
        <input
          type="text"
          placeholder="Enter Email" 
          name="username" 
          {...register("email", { required: "Email is Required" ,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          }})}
        />  
        <p className='text-danger'>{errors.email?.message}</p>
        <label>Password</label>   
        <input 
          type="password" 
          placeholder="Enter Password" 
          name="password" 
          {...register("password", { required: "Password is Required" 
         })}
        /> 
        <p className='text-danger'>{errors.password?.message}</p>

        <button type="submit" onClick={login} >Log in</button>   
      </form>
    </div>
  )
}
