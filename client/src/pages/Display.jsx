import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home'
import '../styles/Display.css'

export const Display = () => {
  return (
    <div className='display'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}
