import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux';

export default combineReducers({
    firebase: firebaseReducer
});