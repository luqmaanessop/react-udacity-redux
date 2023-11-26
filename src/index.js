import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reducer from './reducers'; // the index.js file inside reducers (combined reducers)
import middleware from './middleware'; // same as above
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
