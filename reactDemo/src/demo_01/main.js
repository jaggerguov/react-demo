import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from './containers/Comment'
import './styles/main.css'

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div className="demo1">
       <Comment />
     </div>
    )
  }
}
export default connect()(Main);