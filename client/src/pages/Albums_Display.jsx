import React, { useContext, useEffect, useState } from 'react';
import '../styles/Albums_Display.css';
import { assets } from '../assets/frontend-assets/assets';
import { Navbar } from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { PlayerContext } from './PlayerContext';

export const Albums_Display = ({album}) => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState("");
  const { playWithId } = useContext(PlayerContext);
  const { albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    albumsData.map((item) => {
      if (item._id == id) {
        setAlbumData(item);
      }
    })
  }, [])

  return albumData ? (
    <>
      <Navbar />
      <div className='disp-album-main'>
        <img className='disp-album-image' src={albumData.image} alt='' />
        <div className='disp-album-content'>
          <p className='playlist'>Playlist</p>
          <h2 className='disp-album-name'>{albumData.name}</h2>
          <h4 className='disp-album-desc'>{albumData.desc}</h4>
          <div style={{ display: 'flex', flexDirection: 'row', fontSize: '0.7rem', gap: '0.8rem' }}>
            <img style={{ width: '3.7rem', marginLeft: '-0.3rem' }} src={assets.logo} alt='' />
            <p>50 songs</p>
            <p className='total-dura'>about 2 hr 30 min</p>
          </div>
        </div>
      </div>
      <table>
      <thead className='disp-album-body'>
        <tr>
        <th colSpan={3}><p><b style={{ marginRight: '1rem' }}>#</b>Title</p></th>
        <th><p className='song-desc'>Source</p></th>
        <th><p className='song-artist'>Artist</p></th>
        <th><img style={{ marginRight: '1rem', width: '1rem' }} className='song-dura' src={assets.clock_icon} alt='' /></th>
        </tr>
      </thead>
      {/* <hr /> */}
      {
        songsData.filter((item)=>(item.album == album.name)).map((item, index) => (
             <tbody onClick={() => playWithId(item._id)} key={index} className='disp-album-data'>
            <tr>
              <th><b style={{ marginRight: '1rem', color: '#a7a7a7' }}>{index + 1}</b></th>
              <th><img className='disp-album-data-image' src={item.image} alt='' /></th>
              <th><p>{item.name}</p></th>
              <th><p className='song-desc'>{item.desc}</p></th>
              <th><p className='song-artist'>{item.artist}</p></th>
              <th><p className='song-dura'>{item.duration}</p></th>
            </tr>
          </tbody>
        ))
      }
      </table>
    </>
  ) : null ;
}
