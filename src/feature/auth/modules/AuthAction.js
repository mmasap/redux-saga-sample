import { createAction } from 'redux-actions';
import { AUTH_START } from '../../../constants/ActionTypes';

const authAction = {
  authStart: createAction(AUTH_START),
};

export default authAction;
