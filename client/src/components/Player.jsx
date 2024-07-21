import React from 'react';
import '../styles/Player.css';
import { songsData,assets } from '../assets/frontend-assets/assets';

export const Player = () => {
  return (
    <div className='player'>
      <div className='player-content'>
        <img src={songsData[0].image} alt={songsData[0].name} />
        <div className='song-details'>
          <p style={{fontWeight:'500'}}>{songsData[0].name}</p>
          <p style={{fontWeight:'300'}}>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='player-controls'>
        <div className='player-controls-items'>
            <img className='player-controls-button' src={assets.shuffle_icon} alt=''/>
            <img className='player-controls-button' src={assets.prev_icon} alt=''/>
            <img className='player-controls-button' src={assets.play_icon} alt=''/>
            <img className='player-controls-button' src={assets.next_icon} alt=''/>
            <img className='player-controls-button' src={assets.loop_icon} alt=''/>
        </div>
        <div className='player-time'>
            <p style={{fontSize:'0.7rem'}}>0:00</p>
            <div className='player-timeline'>
                <div className='player-line'></div>
            </div>
            <p style={{fontSize:'0.7rem'}}>3.15</p>
        </div>
      </div>
      <div className='player-tools'>
        <img className='player-tools-button' src={assets.plays_icon} alt=''/>
        <img className='player-tools-button' src={assets.mic_icon} alt=''/>
        <img className='player-tools-button' src={assets.queue_icon} alt=''/>
        <img className='player-tools-button' src={assets.speaker_icon} alt=''/>
        <img className='player-tools-button' src={assets.volume_icon} alt=''/>
        <div className='player-tools-volume'>

        </div>
        <img className='player-tools-button' src={assets.mini_player_icon} alt=''/>
        <img className='player-tools-button' src={assets.zoom_icon} alt=''/>
      </div>
    </div>
  );
};
