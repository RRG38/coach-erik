import React, { Component } from "react";
import axios from "axios";
import "./assets/App.css";
import Header from "./components/Header/Header";
import AddLift from './components/AddLift/AddLift'
import Lift from './components/Lift/Lift'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pastLifts: []
    }
  }

  //commented out GET console error 404
  // componentDidMount() {
  //   axios.get('/api/lifts')
  //     .then((res) => {
  //       this.setState({pastLifts: res.data})
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }




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
