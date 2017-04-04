import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './components/app/App.jsx';
import rootReducer from './rootReducer.js';



const store = createStore(
  rootReducer,
  compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('app')
);
