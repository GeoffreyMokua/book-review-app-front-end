import React from 'react'
import react, { useState } from 'react'
import login from '../login/login.css'

function Login() {
  return (
    <div className="parent-container">
      <div className="image-background">
        <img src="https://res.cloudinary.com/dnhtposui/image/upload/v1670398469/books_with_coffeemug_sgpbjx.jpg" alt="Background Image" />
      </div>
      <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
      <label>Username</label>
          <input type="text" name="" required=""></input>
        </div>
        <div className="user-box">
          <label>Password</label>
          <input type="text" name="" required=""></input>
        </div>
        <div className='submit-box'>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        </div>
        
      </form>
      <a href='/components/Register' className="link-btn">Don't have an account? Register here.</a>
    </div>
    </div>
  );
}
export default Login;