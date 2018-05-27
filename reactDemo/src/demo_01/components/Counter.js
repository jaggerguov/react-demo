import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './Button'


class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {state} = this.props
    return (
      <p>
        Clicked: {state} times
        {' '}
        <Button />
      </p>
    )
  }
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }
function dealClick(state){
  return {
    state   
  }
}
export default connect(dealClick)(Counter)
