import React, { Component } from "react";
import axios from "axios";
import "./assets/App.css";
import Header from "./components/Header/Header";
import AddLift from './components/AddLift/AddLift'
import Lift from './components/Lift/Lift'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddLift />
        <Lift />
      </div>
    )
  }
}

export default App;
