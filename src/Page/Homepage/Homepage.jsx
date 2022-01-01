import React,{useState,useEffect} from 'react'
import "./Homepage.scss"
import chevron from '../../Assets/chevron-down.svg'
import Navbar from '../../Components/Navbar/Navbar'
import SearchInput from '../../Components/SearchInput/SearchInput'
import Card from '../../Components/Card/Card'
import Thumbnail from "../Thumbnail/Thumbnail"

const DATA_SURAH = "https://api-alquranid.herokuapp.com/surah";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataAPI, setDataAPI] = useState([]);
  const [dataSurahChild, setDataSurahChild] = useState('');
  const [limit, setLimit] = useState(30);

  function PropsFromChild(dataFromChild){
    setDataSurahChild(dataFromChild)
  }

  

  function requestData(){
    if(dataSurahChild !== ""){
      setIsLoading(true)
      fetch(DATA_SURAH +`/search/${dataSurahChild}`)
      .then(res=> res.json())
      .then(res => {
        setDataAPI(res.data)
        setIsLoading(false)
    })
    }else{
      fetch(DATA_SURAH)
      .then(res=> res.json())
      .then(res => {
        let datas = res.data.slice(0, limit);
        setDataAPI(datas)
        setIsLoading(false)
    })
    }
  }

   useEffect(() => {
    requestData();
  }, [limit,dataSurahChild])

  return (
    <>
    {isLoading ? <Thumbnail/> : (
      <div className='homepage'>
      <Navbar/>
     <div className='main_content'>
      <SearchInput PropsFromChild={PropsFromChild}/>

      <Card data={dataAPI} />
      <button className={limit >= 114 || dataSurahChild !== "" ? "view_more-hide": "view_more"} onClick={()=>setLimit(limit+30)}>
        Lihat lebih banyak surah
        <span><img src={chevron} alt="" /></span>
      </button>
     </div>
    </div>
    )}
     
    </>
  )
}
