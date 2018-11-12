import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import eventReducer from './eventReducer';

export default combineReducers({
    firebase: firebaseReducer,
    chat: chatReducer,
    event: eventReducer
});