import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExampleComponent } from "react-comp-1";
import "react-comp-1/dist/index.css";
const { add } = require("@cyb/utils");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{add(1, 2)}</p>
        <ExampleComponent text="I Am React Comp 1"></ExampleComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
