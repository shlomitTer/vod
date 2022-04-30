import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (

    <div className='text-center my-5'>
      <h2>THERE IS NOT RESULTS </h2>
      <Link to="/" className='pb-5'>Back to home</Link>
    </div >
  )
}
