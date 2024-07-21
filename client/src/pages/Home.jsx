import React from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/Home.css'
import {albumsData} from '../assets/frontend-assets/assets'
import {songsData} from '../assets/frontend-assets/assets'
import { Albums } from '../components/Albums'
import { Songs } from '../components/Songs'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='home-main'>
        <h1 className='home-album-heading'>Featured Charts</h1>
          <div className='albumss'>
            {albumsData.map((item,index)=>(<Albums key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />))}
          </div>
        <h1 className='home-song-heading'>Today's Biggest Hits</h1>
          <div className='songss'>
            {songsData.map((item,index)=>(<Songs key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />))}
          </div>
        </div>
    </>
  )
}
