import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from './middleware';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers, middleware);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
