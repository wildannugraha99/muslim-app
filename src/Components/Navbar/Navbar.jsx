import React,{useState} from 'react'
import "./Navbar.scss"
import menu from '../../Assets/hamburger.svg'
import close from "../../Assets/close.svg"
import kabah from "../../Assets/kaaba-removebg-preview.png"
import quran from "../../Assets/Quran.svg"
import doa from "../../Assets/Ramadan.svg"
import masjid from "../../Assets/Mosque.svg"

export default function Navbar() {

  const [isShow, setIsShow] = useState(false);
  
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div className="navbar_logo">
          <img src={kabah} alt="error" />
          <h2>Muslim App</h2>
        </div>
        
        <div className={isShow ? "navbar_list-mobile" : "navbar_list-desktop"}>
          <div className='box'>
          <img src={quran} alt="" />
            <div className="list_surah">Al-Qur'an</div>
          </div>
          <div className='box'>
            <img src={doa} alt="" />
            <div className="list_doa">Doa Sehari-hari</div>
          </div>
          <div className='box'>
            <img src={masjid} alt="" />
            <div className="list_sholat">Jadwal Shalat</div>
          </div>
        </div>

        <img src={isShow ? close : menu} alt="" className='menu-icon'onClick={()=>setIsShow(!isShow)}/>
      </div>
    </div>
  )
}
