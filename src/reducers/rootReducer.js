import { firebaseReducer } from 'react-redux-firebase'
import {combineReducers} from 'redux';
import chatReducer from './chatReducer';

export default combineReducers({
    firebase: firebaseReducer,
    chatReducer
  });