import React from 'react'
import BookReview from '../bookReview/BookCard'
import Home from '../home/Home'
import Login from '../login/Login'
import navbar from '../navbar/navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
      <div>
        <nav class="navbar navbar-expand-lg bg-#ffdde1">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className='nav-link' to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/reviews">BookReview</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/login">Login</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/add_books">Add book</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
          
  )
      
}

export default Navbar