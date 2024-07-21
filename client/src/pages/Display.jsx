import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home'
import '../styles/Display.css'
import { Albums_Display } from './Albums_Display'

export const Display = () => {
  return (
    <div className='display'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/albums/:id' element={<Albums_Display/>}/>
      </Routes>
    </div>
  )
}
