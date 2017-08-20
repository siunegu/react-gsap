import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import AppContainer from './containers/App';

import './base.css';

function logger({ getState }) {
  return next => (action) => {
    console.log('Dispatching: ', action);
    const val = next(action);
    console.log('State: ', getState());
    return val;
  };
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
