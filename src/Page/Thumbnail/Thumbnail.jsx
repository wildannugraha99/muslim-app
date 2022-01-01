import React from 'react'
import "./Thumbnail.scss"
import svg from "../../Assets/kaaba-removebg-preview.png"
import Loading from '../../Components/Loading/Loading'

export default function Thumbnail() {
  return (
    <div className="container">
      <div className='thumbnail'>
      <img src={svg} alt="" />
      <div className='border'>
        <div className='name__app'>Muslim App</div>
        <Loading/>
        <div className='text'>Sabar sebentar yah, lagi loading..</div>
      </div>
    </div>
    </div>
  )
}
