import React,{useState} from 'react'
import glass from "../../Assets/glass.svg"
import "./SearchInput.scss"

export default function SearchInput({PropsFromChild}) {
  const [inpValue, setInpValue] = useState('');

  function inputValue(e){
    const val = e.target.value;
    setInpValue(val)
  }
  function submit(e){
    e.preventDefault()
    PropsFromChild(inpValue)
  }

  return (
    
      <div className="search_input">
      <form onSubmit={submit}>
        <input type="text" 
            name="search surah" 
            id="search" 
            placeholder='Cari Surah'
            value={inpValue}
            onChange={inputValue}
            />
          <button type='submit' className='submit_btn'><img src={glass} alt="" /></button>
      </form>
        
      </div>

  )
}
