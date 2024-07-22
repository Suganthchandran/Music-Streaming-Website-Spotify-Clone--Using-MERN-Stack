import React,{useEffect, useRef} from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import { Home } from './Home'
import '../styles/Display.css'
import { Albums_Display } from './Albums_Display'
import { albumsData } from '../assets/frontend-assets/assets'

export const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const AlbumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(AlbumId)].bgColor;

  useEffect(()=>{
    if(isAlbum)
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    else
      displayRef.current.style.background = `#121212`;
  })

  return (
    <div ref={displayRef} className='display'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/albums/:id' element={<Albums_Display/>}/>
      </Routes>
    </div>
  )
}
