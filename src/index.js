import "./main.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie";

class App extends Component {
  render() {
    return (
      <div>
        <Movie />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
