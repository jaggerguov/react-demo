import React, { Component } from 'react'
import { connect } from 'react-redux'


class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { getAllContent } = this.props;
    return (
      <div className="demo1_display" style={{ width: "100%", height: "100%", border: "1px solid #ddd" }}>
        <ol>
          {getAllContent.map((val, index) => <li key={index}>{val}</li>)}
        </ol>
      </div>
    )
  }
}

function getAll(state) {
  let { getAllContent } = state.reducers_demo1;
  return {
    getAllContent
  }
}
export default connect(getAll)(Display);
