import React, { useContext, useState, useRef, useEffect } from 'react';
import '../styles/Player.css';
import { assets } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../pages/PlayerContext';

export const Player = () => {
  const { track, seekBg, seekBar, playStatus, play, pause, previous, next, time, seekSong, isLooping, toggleLoop, toggleShuffle, isShuffling, adjustVolume, volume } = useContext(PlayerContext);

  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const volumeRef = useRef(null);

  const handleVolumeChange = (e) => {
    if (volumeRef.current) {
      const rect = volumeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newVolume = Math.max(0, Math.min(1, x / volumeRef.current.offsetWidth));
      adjustVolume(newVolume);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleVolumeChange(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleVolumeChange(e);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.error("Error exiting fullscreen: ", err));
    } else {
      document.documentElement.requestFullscreen().catch(err => console.error("Error entering fullscreen: ", err));
    }
    setIsFullscreen(prev => !prev);
  };

  return track ?(
    <div className={`player ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className='player-content'>
        <img src={track.image} alt={track.name} />
        <div className='song-details'>
          <p style={{ fontWeight: '500' }}>{track.name}</p>
          <p style={{ fontWeight: '300' }}>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='player-controls'>
        <div className='player-controls-items'>
          <img
            onClick={toggleShuffle}
            className={`player-controls-button ${isShuffling ? 'active' : ''}`}
            src={isShuffling ? assets.shuffle_on_icon : assets.shuffle_icon}
            alt='Shuffle'
          />
          <img onClick={previous} className='player-controls-button' src={assets.prev_icon} alt='' />
          {playStatus ?
            <img onClick={pause} className='player-controls-button' src={assets.pause_icon} alt='' />
            :
            <img onClick={play} className='player-controls-button' src={assets.play_icon} alt='' />
          }
          <img onClick={next} className='player-controls-button' src={assets.next_icon} alt='' />
          <img
            onClick={toggleLoop}
            className={`player-controls-button ${isLooping ? 'active' : ''}`}
            src={isLooping ? assets.loop_on_icon : assets.loop_icon}
            alt=''
          />
        </div>
        <div className='player-time'>
          <p style={{ fontSize: '0.7rem' }}>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='player-timeline'>
            <div ref={seekBar} className='player-line'></div>
          </div>
          <p style={{ fontSize: '0.7rem' }}>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='player-tools'>
        <img className='player-tools-button' src={assets.plays_icon} alt='' />
        <img className='player-tools-button' src={assets.mic_icon} alt='' />
        <img className='player-tools-button' src={assets.queue_icon} alt='' />
        <img className='player-tools-button' src={assets.speaker_icon} alt='' />
        <img className='player-tools-button' src={assets.volume_icon} alt='' />
        <div
          ref={volumeRef}
          className='player-tools-volume'
          onMouseDown={handleMouseDown}
        >
          <div
            className='player-line'
            style={{ width: `${volume * 100}%`, height: '0.12rem', backgroundColor: 'blue' }}
          />
        </div>
        <img className='player-tools-button' onClick={toggleFullscreen} src={assets.zoom_icon} alt='' />
      </div>
    </div>
  ): null;
};
