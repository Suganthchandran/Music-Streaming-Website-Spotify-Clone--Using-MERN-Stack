import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Albums.css'

export const Albums = ({image,name,desc,id}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate(`/albums/${id}`)}} className='album-main'>
        <img className='album-image' src={image} alt=''/>
        <p className='album-name'>{name}</p>
        <p className='album-desc'>{desc}</p>
    </div>
  )
}
