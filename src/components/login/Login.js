
import React from 'react'
// import { useState } from 'react'       
import {useNavigate} from 'react-router-dom'


function Login({onLogin}) {
  const autoNavigate = useNavigate()
  const [username, setUsername] = ("")
  const [password, setPassword] = ("")
 

  // perform side effect for user login
  const handleSubmit = e => {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    autoNavigate("/reviews")
    }
  
  return (
    
    <div className="bg-white h-screen">
      <div className="flex items-center mx-auto w-1/2 flex-col justify-center py-36">
      <h2>Enter your credentials to login</h2>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto flex flex-col justify-center ">
        <div className='flex flex-col'>
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Username</label>
            <input type="text" id="username" name="username" required={true} value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full min-w-0 flex-1  rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
        </div>
          <div className='flex flex-col'>
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Password</label>
            <input className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text" id="password" name="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
          <button  type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5">
          Submit
        </button>
      </form>
      <a href='/components/Register' >Don't have an account? Register here.</a>
    </div>
    </div>
  );
}
export default Login;