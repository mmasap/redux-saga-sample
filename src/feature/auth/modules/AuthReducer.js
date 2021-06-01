import { handleActions } from 'redux-actions';
import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
} from '../../../constants/ActionTypes';

const initialState = {
  user: {},
  error: null,
  loading: false,
};

export default handleActions(
  {
    [AUTH_START]: (state) => ({
      ...state,
      user: null,
      error: null,
      loading: true,
    }),
    [AUTH_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload,
      loading: false,
    }),
    [AUTH_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
  initialState
);
