import React from 'react'
import '../Styles/Sidebar.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='admin-sidebar'>
        <div className='admin-logo'>
          <img src={assets.logo} alt='' />
          <hr style={{ margin: '0 0.75rem' }} />
        </div>
        <div className='admin-sidebar-elements'>
          <div onClick={()=>navigate('/')} className='admin-elements'>
            <img src={assets.add_song} alt='' />
            <h1>Add Songs</h1>
          </div>
          <div onClick={()=>navigate('/add-albums')} className='admin-elements'>
            <img src={assets.add_song} alt='' />
            <h1>Add Albums</h1>
          </div>
          <div onClick={()=>navigate('/list-songs')} className='admin-elements'>
            <img src={assets.add_song} alt='' />
            <h1>List Songs</h1>
          </div>
          <div onClick={()=>navigate('/list-albums')} className='admin-elements'>
            <img src={assets.add_song} alt='' />
            <h1>List Albums</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar