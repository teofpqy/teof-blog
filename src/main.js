import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import rootReducers from './rootReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = (preloadedState) => createStore(rootReducers, preloadedState, composeEnhancers(applyMiddleware(thunkMiddleware)));
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,
  document.getElementById('root'));
