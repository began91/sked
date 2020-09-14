import React from 'react';
import { useSelector } from 'react-redux';
import Clock from 'react-live-clock';
import logo from './resources/28patch.png';
import Schedule from './components/Schedule';
import DropArea from './components/DropArea';
import './App.css';
import useTime from './hooks/useTime';

function App() {
  const data = useSelector(state=>state.schedule.parsedData);
  const time = useTime();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="HT-28 Squadron Patch" className="App-logo" />
        <h1>HT-28 {time.slice(0,2) + ':' + time.slice(2,4)}</h1>
      </header>
      {data?.length ? <Schedule/> : <DropArea/>}
    </div>
  );
}

export default App;
