// package import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import createRoute from './routes';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

// ↓ミドルウェアの実装
const logger = createLogger();
const baseHistory = browserHistory;
const routingMiddleware = routerMiddleware(baseHistory);

// applyMiddlewareを使用することで、
// ActionとReducerの間の処理としてMiddlewareを実行できる
// composeは右から左に関数を合成する
const enhancer = compose(
  applyMiddleware(routingMiddleware, logger)
);

const store = createStore(
  combineReducers({ rootReducer, rooting: routerReducer }),
  enhancer
);

// ストアとブラウザ履歴の同期
const history = syncHistoryWithStore(baseHistory, store);
// 上で作成したstoreでルーティングの実装
const routes = createRoute(store);

ReactDOM.render(
  <Provider store ={store} >
  
)




