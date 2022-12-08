import { useState } from 'react'

function Register( { onRegister }){
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
  }

    return(
        <div >
            <form onSubmit={userRegister} >
                <input type="text"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                    }}
                    placeholder="Enter your username"/>
                <input type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    }}
                    placeholder="Enter Password"/>
                <button onClick={userRegister} >Register</button>
                <div hidden={errors.length <= 0 }>
                    {errors.map((err) => {
                        return <h4 key={errors.indexOf(err)}>{err}</h4>
                        })}
                </div>
            </form>
    </div>
    )
  }
  export default Register;