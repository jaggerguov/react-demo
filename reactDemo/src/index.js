import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/rootReducer'
import registerServiceWorker from './registerServiceWorker'
import Demo1 from './demo_01/main'



const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Demo1 />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
