import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllContent } from '../redux/action'


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <button style={{ width: "100%", height: "100%" }} onClick={this.onClick}>提交</button>
    )
  }
  onClick = () => {
    let { inputContent, dispatch, allContent } = this.props;
    if (inputContent === "") {
      return;
    }
    allContent.push(inputContent);
    //allContent = allContent.concat();
    //console.log(allContent);
    //allContent=[1,23,2];
    //this.setState({ allContent:allContent });
    dispatch(getAllContent(allContent));
  }
}


function getInputText(state) {
  const { getInputContent, getAllContent } = state.reducers_demo1;
  console.log(getInputContent);
  return {
    allContent: getAllContent,
    inputContent: getInputContent
  }
}
export default connect(getInputText)(Button);
