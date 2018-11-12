import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import {rrfConfig} from './config/firebase';
import rootReducer from './reducers/rootReducer';

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
)(createStore)

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
