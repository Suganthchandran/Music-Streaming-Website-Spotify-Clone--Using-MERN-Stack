import React from 'react'
import '../styles/Sidebar.css'
import {assets} from '../assets/frontend-assets/assets'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-element1'>
            <div className='sidebar-content1'>
                <img className='sidebar-image1' src={assets.home_icon} alt=''/>
                <h1 className='sidebar-text1'>Home</h1>
            </div>
            <div className='sidebar-content1'>
                <img className='sidebar-image1' src={assets.search_icon} alt=''/>
                <h1 className='sidebar-text1'>Search</h1>
            </div>
        </div>
        <div className='sidebar-element2'>
            <div className='sidebar-element2-5'>
                <div className='sidebar-content2'>
                    <img className='sidebar-image2' src={assets.stack_icon} alt=''/>
                    <h1 className='sidebar-text2'>Your Library</h1>
                </div>
                <div className='sidebar-content2-5'>
                <img style={{width:'15%'}} src={assets.plus_icon} alt=''/>
                <img style={{width:'15%'}} src={assets.arrow_icon} alt=''/>
                </div>
            </div>
            <div className='sidebar-playlist'>
                <h1 className='sidebar-playlist-h1'>Create your first playlist</h1>
                <p className='sidebar-playlist-p'>It's easy we will help you</p>
                <button className='sidebar-playlist-butt'>Create Playlist</button>
            </div>
            <div className='sidebar-playlist' style={{marginTop:'4px'}}>
                <h1 className='sidebar-playlist-h1'>Let's find some podcasts to follow</h1>
                <p className='sidebar-playlist-p'>We will keep you update on new episodes</p>
                <button className='sidebar-playlist-butt'>Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}
