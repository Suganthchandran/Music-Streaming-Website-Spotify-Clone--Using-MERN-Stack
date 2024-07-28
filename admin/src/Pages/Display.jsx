import React from 'react'
import '../Styles/Display.css'
import {Routes,Route} from 'react-router-dom';
import AddSong from './AddSong'
import AddAlbum from './AddAlbum'
import ListSong from './ListSong'
import ListAlbum from './ListAlbum'
import { ToastContainer } from 'react-toastify';

export const url="http://localhost:4000";

const Display = () => {
  return (
    <div className='admin-display'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<AddSong/>} />
        <Route path='/add-albums' element={<AddAlbum/>} />
        <Route path='/list-songs' element={<ListSong/>} />
        <Route path='/list-albums' element={<ListAlbum/>} />
      </Routes>
    </div>
  )
}

export default Display