import React from 'react'
import InputComp from './inputComp'
import SearchBtn from './searchBtn'
import { BsCameraVideo } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function HeaderComp() {
  return (
    <React.Fragment>
      <div className='bg-dark d-flex justify-content-center p-4 row text-light  text-start align-text-top _shadow'>

        <BsCameraVideo className='col-1  fs-1' />
        <Link className='h1 text-light text-decoration-none col-md-2 ' to={"/"}>VOD</Link>
      </div>

      <div className=' d-flex align-items-center justify-content-between row bg-secondary _shadow'>

        <SearchBtn />
        <InputComp />
      </div>



    </React.Fragment>
  )
}
