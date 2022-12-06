import React from 'react'
import BookReview from '../bookReview/BookReview'
import Home from '../home/Home'
import Login from '../login/Login'
import navbar from '../navbar/navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/reviews">BookReview</Link>
        <Link to="/login">Login</Link>
        </div>
          
  )
      
}

export default Navbar