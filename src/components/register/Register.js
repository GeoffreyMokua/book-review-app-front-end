import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css'

function Register( { onLogin }){
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate()
    const [ errors, setErrors ] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        fetch("/users", {
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
            r.json().then((err) => setErrors(err.error));
          }
        })
        navigate("/reviews")
        }

//     function userRegister(e){
//         e.preventDefault()
//         fetch('/register',{
//             method : 'POST',
//             headers : { "Content-Type" : 'application/json' },
//             body : JSON.stringify({ username, password })
//         })
//         .then(r => {
//             if(r.ok){
//                 r.json().then(user => onRegister(user))
//             } else {
//                 r.json().then(e => {
//                     setErrors(e.errors)
//                     })
//             }
//         })
//   }

    return(
        <div className="parfent-container">
        <div className="login-box">
        <h2>Register</h2>
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
        {/* <a href='/components/Register' className="link-btn">Don't have an account? Register here.</a> */}
      </div>
      </div>
    )
  }
  export default Register;