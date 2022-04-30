import React, { useEffect, useState } from 'react'
import { doApiGet,API_URL } from '../services/apiService';
import { useNavigate, useParams } from 'react-router-dom';
import Title from './title';
import VodItem from './vodItem';



export default function VodYearList(props) {

  const [vodAr, setVodAr] = useState([]);
  const [loading, setLoading] = useState(false);
  let nav = useNavigate();

  let params = useParams();

  useEffect(() => {
    doApi();
  }, []);

  useEffect(() => {
    doApi();
  }, [params.YYYY]);



  const doApi = async () => {
    setLoading(true);
    let url = API_URL +"&s=bank&y=" + params.YYYY;
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
        <article className='row'>
          <Title />
          {vodAr.map(item => {
            return (
              <VodItem key={item.imdbID} item={item} />
            )
          })}
        </article>
      }
    </div>
  )
}

