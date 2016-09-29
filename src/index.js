import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { store } from './App.js'

ReactDOM.render(
  <App 
	todos={store.getState().todos}
  />,
  document.getElementById('root')
);
