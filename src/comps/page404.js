import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className='container my-4 text-center py-5'>
      <h1 className='pt-5'> page 404!</h1>
      <h2 className='pb-5'>Page not found</h2>
      <Link to="/" className='pb-5'>Back to home</Link>
    </div>
  )
}
