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
        <input></input>
        <input></input>
        <input></input>
      </div>
    )
  }
}

export default AddLift