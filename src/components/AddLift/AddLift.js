import React, { Component } from 'react'
import './AddLift.css'

import DateObject from 'react-date-object'

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

    this.createEntry = this.createEntry.bind(this)
  }

  inputName( name ) {
    this.setState({ name })
  }

  inputReps( reps ) {
    this.setState({ reps })
  }

  inputSets( sets ) {
    this.setState({ sets })
  }

  inputWeight( weight ) {
    this.setState({ weight })
  }

  createEntry() {
    let reactDate = new DateObject()
    let date = reactDate.format('MM/DD/YYYY')
    this.setState({date: date})
    console.log(this.state) //ask Garrett why I have to click submit twice for the date to be added to state
    this.setState({
      name: '',
      reps: '',
      sets: '',
      weight: ''
    })
  }

  render() {
    return(
      <div className='addlift-parent'>

        <div>New Lifting Entry:</div>

        <input
          className='inputs'
          placeholder='Enter Name of Lift'
          value={this.state.name}
          onChange={ ( e ) => this.inputName( e.target.value ) }
          />

        <input
          className='inputs'
          placeholder='Enter Number of Repititions'
          value={this.state.reps}
          onChange={ ( e ) => this.inputReps( e.target.value ) }  />

        <input
          className='inputs'
          placeholder='Enter Number of Sets Completed'
          value={this.state.sets}
          onChange={ (e) => this.inputSets(e.target.value)}
          />
        <input
          className='inputs'
          placeholder='Enter Weights Used (lbs.) if applicable'
          value={this.state.weight}
          onChange={ (e) => this.inputWeight(e.target.value)}
          />
        <button onClick={this.createEntry}> SUBMIT </button>
      </div>
    )
  }
}

export default AddLift