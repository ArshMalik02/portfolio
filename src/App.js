import React from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightContent from './components/RightContent';

function App() {
  return (
    <div className="App grid grid-cols-4 h-screen">
      <div className="col-span-2">
        <LeftPanel />
      </div>
      <div className="col-span-2 overflow-y-scroll">
        <RightContent />
      </div>
    </div>
  );
}

export default App;
