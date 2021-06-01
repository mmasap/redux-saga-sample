import { put } from 'redux-saga/effects';
import { AUTH_SUCCESS, AUTH_FAIL } from '../../../constants/ActionTypes';

export default function* run() {
  try {
    // call RestAPI
    const result = yield new Promise((resolve) =>
      setTimeout(
        () => resolve({ name: 'testUser', email: 'test@test.com' }),
        1000
      )
    );
    yield put({ type: AUTH_SUCCESS, payload: result });
  } catch (e) {
    yield put({
      type: AUTH_FAIL,
      payload: 'error occurred',
    });
  }
}
