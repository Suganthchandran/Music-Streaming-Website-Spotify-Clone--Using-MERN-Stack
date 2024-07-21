import React from 'react'
import '../styles/Albums_Display.css'
import {albumsData} from '../assets/frontend-assets/assets'
import { Navbar } from '../components/Navbar'
import { useParams } from 'react-router-dom'

export const Albums_Display = () => {

  const {id} = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <Navbar/>
    <div>
      <img src={albumData.image}/>
      <p>{albumData.name}</p>
      <p>{albumData.desc}</p>
    </div>
    </>
  )
}
