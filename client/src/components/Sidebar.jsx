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
                <div className='sidebar-content2'>
                <img style={{width:'15%'}} src={assets.arrow_icon} alt=''/>
                <img style={{width:'15%'}} src={assets.plus_icon} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}
