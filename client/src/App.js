import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Display } from './pages/Display';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio preload='auto'></audio>
    </div>
  );
}

export default App;
