import React, { useState, useContext } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Display } from './pages/Display';
import { PlayerContext } from './pages/PlayerContext';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { audioRef, track, songsData } = useContext(PlayerContext);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.error("Error exiting fullscreen: ", err));
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen().catch(err => console.error("Error entering fullscreen: ", err));
      setIsFullscreen(true);
    }
  };

  // Effect to synchronize the fullscreen state
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <SignedIn>
      <div className={`App ${isFullscreen ? 'fullscreen' : ''}`}>
        {songsData.length !== 0
          ?
          <>
            <div className='main-content'>
              <Sidebar />
              <Display />
            </div>
            <Player toggleFullscreen={toggleFullscreen} />
          </>
          : null}
        <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
      </div>
      </SignedIn>
      <SignedOut>
          <Routes>
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/sign-up' element={<SignUpPage/>} /> 
              <Route path="*" element={<LoginPage/>} />
          </Routes>
      </SignedOut>
    </>
  );
}

export default App;
