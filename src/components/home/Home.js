import React from 'react'
// import Footer from './Footer'
import './home.css'


const Home = () => {
  return (
    <div className='home'>
        <video autoPlay muted loop>
          <source src='https://res.cloudinary.com/dnhtposui/video/upload/v1670223314/pexels-c-technical-6334253_wiwy4l.mp4'/>
        </video>
        <div className='home_text'>
          <p>
            Welcome to Briew.com. We love to learn about the world through books. See a book you like, leave a review. If you don't see a book you like, feel free to upload it and leave a review for future readers! Happy Reading!!
          </p>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
export default Home