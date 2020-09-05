import React from 'react';
import Clock from 'react-live-clock';
import logo from './28patch.png';
import Schedule from './components/Schedule';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="HT-28 Squadron Patch" className="App-logo" />
        <h1>HT-28 <Clock ticking={true} interval={60000} format="HH:mm"/></h1>
      </header>
      <Schedule/>
    </div>
  );
}

export default App;
