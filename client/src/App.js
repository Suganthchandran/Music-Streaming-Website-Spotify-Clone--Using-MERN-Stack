import React, { useContext } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Display } from './pages/Display';
import { PlayerContext } from './pages/PlayerContext';

function App() {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className="App">
      <div className='main-content'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;
