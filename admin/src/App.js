import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Components/Sidebar';
import Display from './Pages/Display';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
        <div className='App-body'>
          <Sidebar/>
          <Display/>
        </div>
    </div>
  );
}

export default App;
