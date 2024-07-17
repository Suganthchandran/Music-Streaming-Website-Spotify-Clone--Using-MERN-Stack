import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
