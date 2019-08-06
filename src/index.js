import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer from './reducer';
import { addComment } from './actions';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));
