import React, { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/Home.css'
import { Albums } from '../components/Albums'
import { Songs } from '../components/Songs'
// import { songsData,albumsData } from '../assets/frontend-assets/assets'
import { PlayerContext } from './PlayerContext'

export const Home = () => {

  const {songsData,albumsData} = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className='home-main'>
        <h1 className='home-album-heading'>Featured Charts</h1>
        <div className='albumss'>
          {albumsData.map((item, index) => (<Albums key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
        </div>
        <h1 className='home-song-heading'>Today's Biggest Hits</h1>
        <div className='songss'>
          {songsData.map((item, index) => (<Songs key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
        </div>
      </div>
    </>
  )
}
