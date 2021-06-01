import { all } from 'redux-saga/effects';

import AuthController from '../feature/auth/controllers/AuthController';

function* rootSaga() {
  yield all([AuthController]);
}

export default rootSaga;
