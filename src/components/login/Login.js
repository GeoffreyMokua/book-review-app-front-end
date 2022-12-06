import React, { useState } from 'react'
import login from '../login/login.css'
// function Login(){
//   // const [ username, setUsername ] = useState('')
//   // const [ password, setPassword ] = useState("")
//   const [ formData , setFormData ] = useState({
//     username: '',
//     password: ""
//   })
//   function handleLogin(e){
//     e.preventDefault()
//     // fetch url from backend
//     // Make a post request to the server
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body : JSON.stringify(formData)
//     })
//     .then(r => r.json())
//     .then(d => {
//       console.log(d)
//     })
//     console.log(password)
//     console.log(username)
//   }
//   const { username , password } = formData
//   // function handleChange(e){
//   //   console.log(e.target.name)
//   //   setFormData({...formData, [e.target.name] : [e.target.value]})
//   // }
//   return(
//   //   <form onSubmit={handleLogin}>
//   //   <label>
//   //     Username: <input type="text" value={formData.username} onChange={(e) => handleChange(e)}/>
//   //   </label>
//   //   <label>
//   //     Password : <input type="password" value={formData.password} onChange={(e) => handleChange(e)} />
//   //   </label>
//   //   <input type="submit" />
//   // </form>
//   <div>
//     <form onSubmit={handleLogin}>
//       <label>
//         Username: <input type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
//       </label>
//       <label>
//         Password : <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
//       </label>
//       <input type="submit" />
      
//     </form>
//   </div>
    

//     // <form onSubmit={handleLogin}>
//     //   <label>
//     //     Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
//     //   </label>
//     //   <label>
//     //     Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//     //   </label>
//     //   <input type="submit" />
//     // </form>
//   )
// }
// export default Login
function Login() {
  return (
    <div className="parent-container">
      <div className="image-background">
        <img src="https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="Background Image" />
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