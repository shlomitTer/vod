import React from 'react'
import { Link } from 'react-router-dom';

export default function VodItem(props) {
  let imgCss = {
    height: "250px",
    border: "3px"

  }
  let item = props.item;
  return (
    <div className='col-md-3 col-6 text-center p-3 my-2'>
      <h2 className='h5' style={{ height: "60px" }}>{item.Title}</h2>
      <div className=' d-flex flex-column '>

        <Link to={"/video/" + item.imdbID} style={{
          height: "400px", background: "black", backgroundImage: `url(${item.Poster || "https://www.pexels.com/photo/spiral-film-strip-65128/"})`, backgroundRepeat: "no-repeat", backgroundPosition: "center",
          backgroundSize: "percentage", borderRadius: "10%"
        }} className=" link _shadow">
        </Link>

      </div>
      <Link to={"/video/" + item.imdbID} className="btn btn-info m-3 p-2 link">More Info</Link>
    </div>
  )
}
