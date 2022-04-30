import React, { useContext, useEffect, useState } from 'react'
import { doApiGet,API_URL } from '../services/apiService';
import { useNavigate, useParams } from 'react-router-dom';
import Title from './title';
import VodItem from './vodItem';
import NotFound from './notFound';


export default function VodSearchList(props) {
  const [vodAr, setVodAr] = useState([]);
  const [loading, setLoading] = useState(false);

  let params = useParams();
  let nav = useNavigate();

  useEffect(() => {
    doApi();
  }, []);

  useEffect(() => {
    doApi();
  }, [params.searchQ]);

  const doApi = async () => {
    setLoading(true);
    let url = API_URL+"&s=" + params.searchQ || "bank";
    let resp = await doApiGet(url);
    if (!resp.data.Search) {
      setLoading(false);
      nav("/notFound")
         }
    else {
      setVodAr(resp.data.Search);
      setLoading(false);
    }
  }


  return (
    <div className='container'>
     
      {loading ? <h1>loading...</h1> :
        <div>
          <Title />
          <article className='row'>
            {vodAr.map(item => {
              return (
                <VodItem key={item.imdbID} item={item} />
              )
            })}
          </article>
        </div>
      }
    </div>
  )
}

