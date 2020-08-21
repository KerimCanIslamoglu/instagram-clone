import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import ListReducers from './ListReducers';

export default combineReducers({
    loginResponse: LoginReducers,
    listResponse: ListReducers
});