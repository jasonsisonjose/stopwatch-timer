import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBody from "./components/AppBody.js";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-left">
          <h1> TimeMoney</h1>
        </div>
        <div className="App-header-right">
          <button> Login </button>
        </div>
      </div>
      <div className="App-body">
        <AppBody></AppBody>
      </div>
    </div>
  );
}

export default App;
