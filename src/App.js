import React, { Component } from "react";
import axios from "axios";
import "./assets/App.css";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
