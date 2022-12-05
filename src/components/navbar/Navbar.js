import React from 'react'
import BookReview from '../bookReview/BookReview'
import Home from '../home/Home'
import Login from '../login/Login'
import navbar from '../navbar/navbar.css'

function Navbar() {
  return (
      <div>Navbar
          <div><Home /></div>
          <div><BookReview/></div>
          <div><Login /></div>
          </div>
          
  )
      
}

export default Navbar