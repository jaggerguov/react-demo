import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Bar from './components/Bar';
import Pie from './components/Pie';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><Bar /><Pie /></div>, document.getElementById('root'));
registerServiceWorker();
