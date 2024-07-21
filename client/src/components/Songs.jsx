import React from 'react'
import '../styles/Songs.css'

export const Songs = ({image,name,desc,id}) => {
  return (
    <div className='song-main'>
        <img className='song-image' src={image} alt=''/>
        <p className='song-name'>{name}</p>
        {/* <p className='album-desc'>{desc}</p> */}
    </div>
  )
}
