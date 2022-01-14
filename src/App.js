import React, { Component } from "react";
import axios from "axios";
import "./assets/App.css";
import Header from "./components/Header/Header";
import AddLift from './components/AddLift/AddLift'
import Lift from './components/Lift/Lift'


class App extends Component {
  constructor() {
    super()

    this.state = {
      pastLifts: []
    }

    this.addLift = this.addLift.bind(this)
    this.updateLift = this.updateLift.bind(this)
    this.deleteLift = this.deleteLift.bind(this)
  }


  componentDidMount() {
    axios
      .get('/api/lifts')
      .then((res) => {
        this.setState({pastLifts: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addLift(data) {
    const body = { data }
    axios
      .post('/api/lifts', body)
      .then(({data}) => {
        this.setState({pastLifts: data})})
      .catch((err) => {
      console.log(err)
    })
  }

  updateLift(id, name, reps, sets, weight) {
    const newLift = {
      id: id,
      name: name,
      reps: reps,
      sets: sets,
      weight: weight
    }
    axios
      .put(`/api/lifts?id=${id}`, newLift)
      .then(({ data }) => {
        this.setState({pastLifts: data})
      .catch((err) => console.log(err))
      })
  }

  deleteLift(id) {
    axios
      .delete(`/api/lifts?id=${id}`)
      .then(({data}) => {
        this.setState({pastLifts: data})
      })
      .catch((err) => console.log(err))
  }


  render() {
    const { pastLifts } = this.state

    return (
      <div className="App">
        <Header />
        <section className='App-content'>
          <AddLift createLiftEntry={this.addLift} />
          {pastLifts.map((lift) => (
            <Lift
              id={lift.id}
              key={lift.id}
              name={lift.name}
              reps={lift.reps}
              sets={lift.set}
              date={this.date}
              weight={lift.weight}
              updateLiftFn={this.updateLift}
              deleteLiftFn={this.deleteLift}
            />
          ))}
        </section>
      </div>
    )
  }
}

export default App;
