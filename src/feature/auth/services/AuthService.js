import { put } from 'redux-saga/effects';
import { AUTH_SUCCESS, AUTH_FAIL } from '../../../constants/ActionTypes';

function* run() {
  console.log('test');
  try {
    yield put({
      type: AUTH_SUCCESS,
      payload: {
        auth: true,
      },
    });
  } catch (e) {
    yield put({
      type: AUTH_FAIL,
      payload: {
        auth: true,
      },
    });
  }
}

export default { run };
