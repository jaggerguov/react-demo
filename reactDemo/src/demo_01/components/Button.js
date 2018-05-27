import React, { Component } from 'react'
import { incressCount, decressCount } from '../redux/action'
import { connect } from 'react-redux'

class Button extends Component {
  constructor(props) {
    super(props);
  }
  onIncrement = () => {
    let { dispatch } = this.props;
    dispatch(incressCount(1))
  }
  onDecrement = () => {
    let { dispatch } = this.props;
    dispatch(decressCount(1))
  }
  render() {
    return (
      <p>
        <button onClick={this.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>
      </p>
    )
  }
}
export default connect()(Button);
