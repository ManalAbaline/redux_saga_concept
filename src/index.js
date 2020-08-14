import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import {watchAgeUp} from './sagas/saga';
import {watchAgeDown} from './sagas/saga';

import { Provider } from 'react-redux';
//import applyMiddleware from redux
import { createStore, applyMiddleware } from 'redux';

//import createSagaMiddleware
import createSagaMiddleware from 'redux-saga';

//add this
const sagaMiddleware = createSagaMiddleware();


//applyMiddleware added to createStore parameters
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);
sagaMiddleware.run(watchAgeDown);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

