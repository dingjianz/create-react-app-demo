import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CMTList from './components/Comment/CmtList'
// import CONText from './components/Context/Context'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<CONText></CONText>, document.getElementById('root'));


import App from './App'
ReactDOM.render(<App/>,document.getElementById('root'))

serviceWorker.unregister();
