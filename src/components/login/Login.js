
// import React from 'react'
// import react, { useState } from 'react'
// import login from '../login/login.css'
       
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'

function Login({onLogin}) {
  const navigate = useNavigate()
  const [username, setUsername] = ("")
  const [password, setPassword] = ("")
  const [errors, setErrors] = useState([]);

  // perform side effect for user login
  const handleSubmit = e => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  
  return (
    <div className="parent-container">
      <div className="image-background">
        <img src="https://res.cloudinary.com/dnhtposui/image/upload/v1670398469/books_with_coffeemug_sgpbjx.jpg" alt="Background Image" />

      </div>
      <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
      <label>Username</label>
          <input type="text" id="username" name="username" required={true} value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="user-box">
          <label>Password</label>
          <input type="text" id="password" name="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)}></input>
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