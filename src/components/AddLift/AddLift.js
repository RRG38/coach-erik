import React, { Component } from 'react'
import './AddLift.css'

class AddLift extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <div className='addlift-parent'>
        <div>New Lifting Entry:</div>
        <input placeholder='Enter Name of Lift'></input>
        <input placeholder='Enter Number of Repititions'></input>
        <input placeholder='Enter Number of Sets Completed'></input>
        <input placeholder='Enter Weights Used (lbs.) if applicable'></input>
        <button> SUBMIT </button>
      </div>
    )
  }
}

export default AddLift