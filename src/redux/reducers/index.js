import { combineReducers } from 'redux';
import { isLoggedInReducer } from './storeReducers';

export default combineReducers({
    currentUser: isLoggedInReducer
});