import { useNavigate } from 'react-router-dom';
import SelectYear from './selectYear';

export default function SearchBtn() {
  let yearsAr = ["1989", "1995", "2000", "2020", "2021"];
  let nav = useNavigate();

  const onClickBtn = (_year) => {
    nav("/year/" + _year);

  }

  return (
    <div className='col-md-6 row my-2'>
      <h4 className=' h5 col-md-3 text-center'>Search By Year:</h4>
      <div className=' col-md-8'>
        {yearsAr.map(item => {
          return (
            <button onClick={() => {
              onClickBtn(item);
            }} className='btn btn-info my-1 mx-2 px-3 ' key={item} >{item}</button>

          )

        })}
        <SelectYear />
      </div>
    </div>
  )
}
