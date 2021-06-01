import { combineReducers } from 'redux';
import auth from '../feature/auth/modules/AuthReducer';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
