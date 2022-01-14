import React, { Component } from 'react'
import './Edit.css'

export default class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      sets: props.sets,
      reps: props.reps,
      weight: props.weight
    }

    this.updateLift = this.updateLift.bind(this)
    this.deleteLift = this.deleteLift.bind(this)
  }

  updateName(value) {
    this.setState({ name: value });
  }

  updateSets(value) {
    this.setState({ sets: value });
  }

  updateReps(value) {
    this.setState({ reps: value });
  }

  updateWeight(value) {
    this.setState({ weight: value });
  }

  updateLift() {
    this.props.updateLiftFn(this.props.id, this.state.name, this.state.reps, this.state.sets, this.state.weight)
    this.props.hideEdit()
  }

  deleteLift(){
    this.props.deleteLiftFn(this.props.id, this.state.name, this.state.reps, this.state.sets, this.state.weight)
    this.props.hideEdit()
  }
  render() {
    const { hideEdit } = this.props
    const { name, reps, sets, weight} = this.state
    return(
      <section className='edit-parent'>
        <div>{this.props.date}</div>
        <div value={name} onChange={(e) => this.updateName(e.target.value)} />
        <div value={reps} onChange={(e) => this.updateReps(e.target.value)} />
        <div value={sets} onChange={(e) => this.updateSets(e.target.value)} />
        <div value={weight} onChange={(e) => this.updateWeight(e.target.value)} />
        <div className="button-controls">
          <button onClick={hideEdit}> BACK TO ALL ENTRIES </button>
          <button onClick={this.updateLift}> UPDATE THIS ENTRY </button>
          <button onClick={this.deleteLift}> DELETE THIS ENTRY </button>
        </div>
      </section>
    )
  }
}