import React from 'react'
import '../styles/Navbar.css'
import {assets} from '../assets/frontend-assets/assets'

export const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='navbar-arrow'>
                <img className='navbar-arrow-image' src={assets.arrow_left} alt=''/>
                <img className='navbar-arrow-image' src={assets.arrow_right} alt=''/>
            </div>
            <div className='navbar-content'>
                <button className='navbar-premium-butt'>Explore Premium</button>
                <button className='navbar-install-app'>Install App</button>
                <button className='navbar-profile'>S</button>
            </div>
        </div>
        <div className='navbar-type'>
                <p className='navbar-type-all'>All</p>
                <p className='navbar-type-list'>Music</p>
                <p className='navbar-type-list'>Podcast</p>
        </div>
    </>
  )
}
