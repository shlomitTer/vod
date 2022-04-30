import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SelectYear() {
  let nav = useNavigate();
  const selectRef = useRef();

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(40), (val, i) => year - i);
  console.log(years);

  const onChengeYear = () => {
    let year = selectRef.current.value;
    nav("/year/" + year);

  }

  return (
    <div className='col-8 my-1 mx-2'>
      <select ref={selectRef} onChange={onChengeYear} className='form-select'>
        {years.map((item, i) => {
          return (
            <option key={i}>{item}</option>
          )
        })}
      </select>
    </div>
  )
}
