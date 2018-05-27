import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInputContent } from '../redux/action'


class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch } = this.props;
    return (
      <input type="text" placeholder="请输入评论" style={{ width: "100%", height: "100%" }} onChange={(e) => dispatch(getInputContent(e.target.value))} />
    )
  }


}

export default connect()(Comment);
