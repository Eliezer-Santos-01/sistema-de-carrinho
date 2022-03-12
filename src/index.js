import React from 'react';
import ReactDOM from 'react-dom';
import Cont from './Context/Cont'

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Cont>
    <App />
    </Cont>
  </React.StrictMode>,
  document.getElementById('root')
);

