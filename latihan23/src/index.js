import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const globalState = {
  totalOrder: 5
}

// Reducer
const rootReducer = (state = globalState, action) => {
  return state;
}

// Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();