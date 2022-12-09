import React from 'react'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='grid grid-cols-2 bg-gray-900 h-screen '>
      <div className='bg-gray-900 flex flex-col justify-center px-5'>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">Book Review</span>
          <span className="block text-indigo-400">review books</span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Welcome to Briew.com. We love to learn about the world through books. See a book you like, leave a review. If you don't see a book you like, feel free to upload it and leave a review for future readers! Happy Reading!!
        </p>
        
      </div>
      <div className='flex flex-col justify-center'>
        <video autoPlay muted loop className="rounded-l-[16px]">
          <source src='https://res.cloudinary.com/dnhtposui/video/upload/v1670223314/pexels-c-technical-6334253_wiwy4l.mp4' />
        </video>

      </div>
        
        { <Footer/> }
    </div>
  )
}
export default Home