import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.svg'

const Error = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <img className='h-96 mb-8' src={error} />
      <h3 className='uppercase font-bold'>page not found !</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link
        to='/'
        className='border-b-2 border-primary mt-8 text-primary hover:scale-95 duration-200'
      >
        Back Home
      </Link>
    </div>
  )
}

export default Error
