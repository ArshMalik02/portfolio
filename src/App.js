import React from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightContent from './components/RightContent';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="App grid grid-cols-4 overflow-y-auto">
      <div className="col-span-2">
        <LeftPanel />
      </div>
      <div className="col-span-2">
        <RightContent />
      </div>
    </div>
  );
}

export default App;
