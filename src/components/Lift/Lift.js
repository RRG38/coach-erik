import React, { Component } from 'react'
import './Lift.css'
import Edit from './Edit/Edit'

class Lift extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewLift: false
    }
  }
  //This puts the post into EDIT mode when the EDIT button is clicked from the drop-down
  showEdit() {
    this.setState({ viewLift: true});
  }

  // This puts the post back into normal viewing mode when the back to entries  button is clicked
  // This method is passed down to the <Edit /> component via props
  hideEdit() {
    this.setState({ viewLift: false });
  }

  render() {
    return(
      <div className='lift-parent'>
        <p> My Past Lifting Entries: </p>
      </div>
    )
  }
}

export default Lift