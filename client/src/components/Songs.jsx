import React, { useContext } from 'react'
import '../styles/Songs.css'
import { PlayerContext } from '../pages/PlayerContext'

export const Songs = ({image,name,desc,id}) => {

  const {playWithId} = useContext(PlayerContext);

  return (
    <div onClick={()=>playWithId(id)} className='song-main'>
        <img className='song-image' src={image} alt=''/>
        <p className='song-name'>{name}</p>
        {/* <p className='album-desc'>{desc}</p> */}
    </div>
  )
}
