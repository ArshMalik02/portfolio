import React from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import RightContent from "./components/RightContent";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <LeftPanel />
      <div className="w-1/2 ml-auto">
        <RightContent />
      </div>
    </div>
  );
}

export default App;
