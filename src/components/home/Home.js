import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <video autoPlay muted loop>
          <source src='https://res.cloudinary.com/dnhtposui/video/upload/v1670223314/pexels-c-technical-6334253_wiwy4l.mp4'/>
        </video>
        <div className='home_text'>
          <h1>
            {/* Welcome to moviefy */}
          </h1>
          <p>
            This here, you get to know the latest movies, and after watching them, you can come and create your own personal favourites list by liking a movie 5+ times(similar to giving a movie a 5-star rating).
            Happy watching and Enjoy moviefy!!
          </p>
        </div>
    </div>
  )
}
export default Home