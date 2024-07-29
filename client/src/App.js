import React, { useContext } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Display } from './pages/Display';
import { PlayerContext } from './pages/PlayerContext';

function App() {

  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="App">
      {songsData.length !== 0
        ?
        <>
          <div className='main-content'>
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
        : null}
      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
    </div>
  );
}

export default App;
