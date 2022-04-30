import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../services/apiService';
import { useNavigate, useParams } from 'react-router-dom';


export default function VideoInfo(props) {
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(false);
  let params = useParams();
  let nav = useNavigate();

  useEffect(() => {
    doApi();
  }, [])

  useEffect(() => {
    doApi();
  }, [params])


  const doApi = async () => {
    setLoading(true);
    let url = API_URL+"&i=" + params.id;
    let resp = await doApiGet(url);
    setVideo(resp.data);
    setLoading(false);
  }
  const rateFunc = () => {
    let rate = Math.round(video.imdbRating);
    let stars = ``;
    let count = 0;
    for (let i = 0; i < Math.floor(rate); i++) {
      stars += "★"
      count++;
    }
    if (count < rate) stars += "✰";
    return stars;
  }


  return (
    <div className='container py-5'>
      {loading ? <h1>loading...</h1> :
        <article className='row '>
          <img src={video.Poster} className="col-md-4 float-start" style={{ borderRadius: "10%" }} />
          <div className='col-md-8 px-5'>
            <h1 className='py-3 fw-bold'>{video.Title}</h1>
            <h4 className='py-3 w-75'>{video.Plot}</h4>
            <h2 className='py-3'>Genre: {video.Genre}</h2>
            <h2 className='py-3'>Rating:{rateFunc()}({ Math.round(video.imdbRating)})</h2>
            <h4 className='pb-3'>Votes:{video.imdbVotes}</h4>
            <button className='btn btn-info' onClick={() => {
              nav(-1);
            }}>Back to list</button>
          </div>
        </article>
      }
    </div>
  )
}
