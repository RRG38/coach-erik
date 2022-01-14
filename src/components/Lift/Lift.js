import React, { Component } from 'react'
import './Lift.css'
import Edit from './Edit/Edit'

class Lift extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewLift: false
    }

    this.hideEdit = this.hideEdit.bind(this)
    this.showEdit = this.showEdit.bind(this)
  }

  showEdit() {
    this.setState({ viewLift: true});
  }

  hideEdit() {
    this.setState({ viewLift: false });
  }

  render() {
    const { editing } = this.state

    return(
      <div>
        <div ClassName='lift-parent' onClick={this.hideEdit}></div>
        <div>{this.props.date}</div>
        <div>{this.props.name}</div>
        <div ClassName='lift-parent' onClick={this.hideEdit}/>
        <div className="lift-content">
          {
            editing ? (
              <Edit
                name={this.props.name}
                reps={this.props.reps}
                sets={this.props.sets}
                weight={this.props.weight}
                hideEdit={this.hideEdit}
                updateLiftFn={this.props.updateLift}
                deleteLiftFn={this.props.deleteLift}
                id={this.props.id}
              />
            ) : (
              <div className="lift-date">{this.props.name}</div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Lift