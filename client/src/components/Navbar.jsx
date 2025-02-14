import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Navbar.css'
import {assets} from '../assets/frontend-assets/assets'
import { SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
        <div className='navbar'>
            <div className='navbar-arrow'>
                <img onClick={()=>navigate(-1)} className='navbar-arrow-image' src={assets.arrow_left} alt=''/>
                <img onClick={()=>navigate(1)} className='navbar-arrow-image' src={assets.arrow_right} alt=''/>
            </div>
            <div className='navbar-content'>
                <button className='navbar-premium-butt'>Explore Premium</button>
                <button className='navbar-profile'>
                  <SignedIn>
                      <UserButton/>
                  </SignedIn>
                </button>
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
