import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// function Register( { onRegister }){
//     const [ username, setUsername ] = useState("");
//     const [ password, setPassword ] = useState("");
//     const [ errors, setErrors ] = useState([]);
//     const navigate = useNavigate

//     const handleSubmit = e => {
//         e.preventDefault();
//         fetch("/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ username, password }),
//         }).then((r) => {
//            const [isLoading, setIsLoading] = (false);
//           if (r.ok) {
//             r.json().then((user) => onLogin(user));
//           } else {
//             r.json().then((err) => setErrors(err.error));
//           }
//         })
//       navigate("/reviews")



function Register({ onRegister }) {
  const autoNavigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  function userRegister(e) {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => onRegister(user))
        } else {
          r.json().then(e => {
            setErrors(e.errors)
          })
        }
      })
    autoNavigate("/reviews")
  }
  return (
    <div className='flex flex-col w-1/2 mx-auto justify-center py-36' >
      
      <form className='flex flex-col w-1/2 mx-auto'>
        <h2 className='text-center'>Fill in your details to register</h2>
        <div className='flex flex-col'>
          <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">username</label>
          <input type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className='user-box'>
          <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">password</label>
          <input type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
       
          <button className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5" onClick={userRegister} >Register</button>
       
        <div hidden={errors.length <= 0}>
          {errors.map((err) => {
            return <h4 key={errors.indexOf(err)}>{err}</h4>
          })}
        </div>
      </form>
    </div>
  )
}
export default Register
