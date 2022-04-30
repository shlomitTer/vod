import React, { useEffect, useState } from 'react'
import { doApiGet,API_URL } from '../services/apiService';
import VodItem from './vodItem';
import Title from './title'



export default function VodListApi(props) {
  const [vodAr, setVodAr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    setLoading(true);
    let url = API_URL + "&s=bank&y=2020";
    let resp = await doApiGet(url);
    setVodAr(resp.data.Search);
    setLoading(false);
  };

  return (
    <div className='container'>
      {loading ? <h1>loading...</h1> :
        <article className='row pt-4'>
           <Title/>
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
