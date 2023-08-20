
import React,{useState} from "react";
import './../styles/App.css';
import ParentComponent from "./ParentComponent";

const App = () => {
  return (
    <div>
      Hello
      <ParentComponent />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
