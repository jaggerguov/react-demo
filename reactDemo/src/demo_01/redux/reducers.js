import { combineReducers } from 'redux'
import { AllCONTENT, INPUTCONTENT,INITINPUT } from './action'

function getInputContent(state = '', action) {
  switch (action.type) {
    case INPUTCONTENT:
      return action.inputContent
    case INITINPUT:
      return action.inputContent
    default:
      return state
  }
}

function getAllContent(state = [], action) {
  switch (action.type) {
    case AllCONTENT:
    return action.allContent.concat()
    default:
      return state
  }
}

function initValue(state = '', action) {
  switch (action.type) {
    case INITINPUT:
      return action.inputContent
    default:
      return state
  }
}

const demo1Reducer = combineReducers({
  getInputContent,
  getAllContent,
  initValue
})
export default demo1Reducer;