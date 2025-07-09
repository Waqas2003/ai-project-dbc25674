import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import rootReducer from './reducers';
import axios from 'axios';

const store = createStore(combineReducers({ rootReducer }), {}, [thunk]);

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);