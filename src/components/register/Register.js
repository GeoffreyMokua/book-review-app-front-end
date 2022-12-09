import { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'




function Register({ onRegister }) {
   const autoNavigate = useNavigate()
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);
    function userRegister(e){
        e.preventDefault()
        fetch('/register',{
            method : 'POST',
            headers : { "Content-Type" : 'application/json' },
            body : JSON.stringify({ username, password })
        })
        .then(r => {
            if(r.ok){
                r.json().then(user => onRegister(user))
            } else {
                r.json().then(e => {
                    setErrors(e.errors)
                    })
            }
        })
      autoNavigate("/reviews")
  }
    return(
        <div className='parent-container' >
          <div className='register-box'>
            <h2>Register</h2>
            <form onSubmit={userRegister} >
          <div className='user-box'>
            <label>username</label>
            <input type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                        }}
                        />
          </div>
          <div className='user-box'>
            <label>password</label>
            <input type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        />
          </div>
          <div className='submit-box'>
            <button className='submit-btn' onClick={userRegister} >Register</button>
          </div>
                  <div hidden={errors.length <= 0 }>
                      {errors.map((err) => {
                          return <h4 key={errors.indexOf(err)}>{err}</h4>
                          })}
                  </div>
              </form>
          </div>
    </div>
    )
  }
  export default Register;


