import { call, takeEvery } from 'redux-saga/effects';
import { AUTH_START } from '../../../constants/ActionTypes';
import AuthService from '../services/AuthService';

function* auth() {
  yield call(AuthService);
}

const AuthController = [takeEvery(AUTH_START, auth)];

export default AuthController;
