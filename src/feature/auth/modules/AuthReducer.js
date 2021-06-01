import { handleActions } from 'redux-actions';
import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
} from '../../../constants/ActionTypes';

const initialState = {
  auth: {
    user: null,
    error: null,
    loading: false,
  },
  lang: 'ja',
};

export default handleActions(
  {
    [AUTH_START]: (state) => ({
      ...state,
      auth: {
        ...state.auth,
        user: null,
        error: null,
        loading: false,
      },
    }),
    [AUTH_SUCCESS]: (state, action) => ({
      ...state,
      auth: {
        ...state.auth,
        user: action.payload,
        loading: false,
      },
    }),
    [AUTH_FAIL]: (state, action) => ({
      ...state,
      auth: {
        ...state.auth,
        error: action.payload,
        loading: false,
      },
    }),
  },
  initialState
);
