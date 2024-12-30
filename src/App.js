import React from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import RightContent from "./components/RightContent";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      {/* <div className="bg-custom-green h-1 w-full fixed top-0 z-50">

      </div> */}
      <LeftPanel />
      <div className="md:w-1/2 ml-auto">
        <RightContent />
      </div>
    </div>
  );
}

export default App;
