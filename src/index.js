import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './app';
import VideosReducer from './store/reducers/videos';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(VideosReducer, composeEnhancers(applyMiddleware(thunk)));
const app = (
	<Provider store={ store }>
		<App />
	</Provider>
);

ReactDOM.render(app, document.querySelector('.container'));
