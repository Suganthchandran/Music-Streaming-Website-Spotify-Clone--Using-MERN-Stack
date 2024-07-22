import React, { useContext } from 'react';
import '../styles/Player.css';
import { assets } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../pages/PlayerContext';

export const Player = () => {

  const {track,seekBg,seekBar,playStatus,play,pause,previous,next,time,seekSong} = useContext(PlayerContext);

  return (
    <div className='player'>
      <div className='player-content'>
        <img src={track.image} alt={track.name} />
        <div className='song-details'>
          <p style={{fontWeight:'500'}}>{track.name}</p>
          <p style={{fontWeight:'300'}}>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='player-controls'>
        <div className='player-controls-items'>
            <img className='player-controls-button' src={assets.shuffle_icon} alt=''/>
            <img onClick={previous} className='player-controls-button' src={assets.prev_icon} alt=''/>
            {playStatus ? 
            <img onClick={pause} className='player-controls-button' src={assets.pause_icon} alt=''/>
            :
            <img onClick={play} className='player-controls-button' src={assets.play_icon} alt=''/>
            }
            <img onClick={next} className='player-controls-button' src={assets.next_icon} alt=''/>
            <img className='player-controls-button' src={assets.loop_icon} alt=''/>
        </div>
        <div className='player-time'>
            <p style={{fontSize:'0.7rem'}}>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='player-timeline'>
                <div ref={seekBar} className='player-line'></div>
            </div>
            <p style={{fontSize:'0.7rem'}}>{time.totalTime.minute}:{time.totalTime.second}</p>
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
