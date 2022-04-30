import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";


export default function InputComp() {

  const inputRef = useRef();
  const nav = useNavigate();

  const onKeyDownFunc = (e) => {
    if (e.key == "Enter") {
      searchInput();
    }
  }

  const searchInput = () => {
   
    let searchQ = inputRef.current.value;
    console.log(searchQ);
    // console.log(searchParam);
    inputRef.current.value = "";
    if(searchQ){
      nav("/search/" +searchQ);
    }
    else{
      nav("/");
    }
    // nav("/search/" + (!searchQ||""? "bank":searchQ));

  }

 

  return (
    <div className='col-md-4 row d-flex justify-content-center'>

      <input onKeyDown={onKeyDownFunc} ref={inputRef} type="text" className=' col-md-5 col-10' placeholder='Search' />
      <button onClick={searchInput} className='btn text-light col-md-1 col-1'><BsSearch /></button>
    </div>
  )
}
