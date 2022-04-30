import { useParams } from 'react-router-dom'

export default function Title(props) {
  let params = useParams();
  return (
    <div className='text-center my-5'>
      {params.searchQ||params.YYYY?
      <h2> Search results  <span>"{params.searchQ}{params.YYYY}"</span></h2>:
      <h2> Search results  <span>"Bank"</span></h2>
    }
    </div>
  )
}
