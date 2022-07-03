import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Activity from "./components/Activity.js";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <div>
          <Activity></Activity>
        </div>
      </div>
    );
  }
}

export default App;
