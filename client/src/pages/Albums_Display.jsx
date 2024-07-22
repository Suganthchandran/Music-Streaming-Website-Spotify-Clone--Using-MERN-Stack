import React from 'react';
import '../styles/Albums_Display.css';
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import { Navbar } from '../components/Navbar';
import { useParams } from 'react-router-dom';

export const Albums_Display = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <Navbar />
      <div className='disp-album-main'>
        <img className='disp-album-image' src={albumData.image} alt='' />
        <div className='disp-album-content'>
          <p style={{ fontSize: '0.7rem' }}>Playlist</p>
          <h2 className='disp-album-name'>{albumData.name}</h2>
          <h4 className='disp-album-desc'>{albumData.desc}</h4>
          <div style={{ display: 'flex', flexDirection: 'row', fontSize: '0.7rem', gap: '0.8rem' }}>
            <img style={{ width: '3.7rem', marginLeft: '-0.3rem' }} src={assets.logo} alt='' />
            <p>50 songs</p>
            <p>about 2 hr 30 min</p>
          </div>
        </div>
      </div>
      <div className='disp-album-body'>
        <p><b style={{ marginRight: '1rem' }}>#</b>Title</p>
        <p className='song-artist'>Artist</p>
        <p className='disp-album-album'>Album</p>
        <img style={{ marginRight: '1rem', width: '1rem' }} src={assets.clock_icon} alt='' />
      </div>
      <hr />
      {
        songsData.map((item, index) => (
          <div key={index} className='disp-album-data'>
            <div className='song-index'>
              <b style={{ marginRight: '1rem', color: '#a7a7a7' }}>{index + 1}</b>
              <img className='disp-album-data-image' src={item.image} alt='' />
              <p>{item.name}</p>
            </div>
            <p className='song-artist'>{item.artist}</p>
            <p className='disp-album-album'>{item.location}</p>
            <p className='disp-album-date'>{item.duration}</p>
          </div>
        ))
      }
    </>
  );
}
