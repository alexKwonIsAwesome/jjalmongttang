import { combineReducers } from 'redux';
import jjals from './jjalReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  jjals,
  auth
});

export default rootReducer;
