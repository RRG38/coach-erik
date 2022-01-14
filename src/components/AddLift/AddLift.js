import React, { Component } from 'react'
import './AddLift.css'

class AddLift extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      reps: '',
      sets: '',
      weight: '',
      date: ''
    }
  }

  inputName( name ) {
    this.setState({ name })
    console.log(this.state.name)
  }

  inputReps( reps ) {
    this.setState({ reps })
  }

  inputSets( sets ) {
    this.setState({ sets })
  }

  inputWeight( weight ) {
    this.setState({ weight })
    console.log(this.state.weight)
  }

  inputDate( date ) {
    this.setState({ date })
  }

  render() {
    return(
      <div className='addlift-parent'>

        <div>New Lifting Entry:</div>

        <input
          placeholder='Enter Name of Lift'
          value={this.state.name}
          onChange={ ( e ) => this.inputName( e.target.value ) }  />

        <input
          placeholder='Enter Number of Repititions'
          value={this.state.reps}
          onChange={ ( e ) => this.inputReps( e.target.value ) }  />

        <input
          placeholder='Enter Number of Sets Completed'
          value={this.state.sets}
          onChange={ (e) => this.inputSets(e.target.value)}
          />
        <input
          placeholder='Enter Weights Used (lbs.) if applicable'
          value={this.state.weight}
          onChange={ (e) => this.inputWeight(e.target.value)}
          />
        <button> SUBMIT </button>
      </div>
    )
  }
}

export default AddLift