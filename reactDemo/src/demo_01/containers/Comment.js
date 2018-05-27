import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Btn'
import Input from '../components/Input'
import Display from '../components/Display'

class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="demo1_comment">
        <div className="demo1_comment_display">
          <Display />
        </div>
        <div className="demo1_comment_input">
          <Input />
        </div>
        <div className="demo1_comment_btn">
          <Button />
        </div>
      </div>
    )
  }
}
export default connect()(Comment);
