import React, { useContext, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './Home'
import '../styles/Display.css'
import { Albums_Display } from './Albums_Display'
import { albumsData } from '../assets/frontend-assets/assets'
import { PlayerContext } from './PlayerContext'
import Search from './Search'

export const Display = () => {

  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const AlbumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id == AlbumId)).bgColor : "#121212";

  useEffect(() => {
    if (isAlbum)
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    else
      displayRef.current.style.background = `#121212`;
  })

  return (
    <div ref={displayRef} className='display'>
      {albumsData.length > 0
        ?
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/albums/:id' element={<Albums_Display album={albumsData.find((x) => (x._id == AlbumId))} />} />
          <Route path='/search' element={<Search/>} />
        </Routes>
        : null
      }

    </div>
  )
}
