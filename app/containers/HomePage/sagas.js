/**
 * gets the token and the contacts from the API
 */

import { takeLatest } from 'redux-saga';
import {
  take,
  call,
  put,
//  select,
  fork,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SUBMIT_AUTH,
  SUBMIT_SIGNUP,
  AUTH_URL,
  USERS_URL,
} from 'containers/App/constants';
import {
  receiveToken,
  receiveAuthError,
  receiveSignUpError,
} from 'containers/App/actions';
// import { receiveContacts, receiveContactsError } from './actions';

import request, { getOptions } from 'utils/request';
// import { selectToken } from 'containers/HomePage/selectors';

/**
 * token request/response handler
 */
export function* getToken(action) {
  const requestURL = AUTH_URL;
  const body = {
    auth: {
      email: action.email,
      password: action.password,
    },
  };
  const options = getOptions({ body, method: 'POST' });

  try {
    // Call our request helper (see 'utils/request')
    const authResponse = yield call(request,
                                    requestURL,
                                    options,
    );
    yield put(receiveToken(authResponse.jwt));
  } catch (err) {
    yield put(receiveAuthError(err));
  }
}


/**
 * signUp request/response handler
 */
export function* postSignUp(action) {
  const requestURL = USERS_URL;
  const body = {
    user: {
      email: action.email,
      username: action.username,
      password: action.password,
    },
  };
  const options = getOptions({ body, method: 'POST' });

  try {
    // Call our request helper (see 'utils/request')
    const signUpResponse = yield call(request,
                                    requestURL,
                                    options);
    yield put(receiveToken(signUpResponse.jwt));
  } catch (err) {
    yield put(receiveSignUpError(err));
  }
}


/*
export function* getContacts() {
  // Select token from store
  const token = yield select(selectToken());
  const requestURL = AUTH_URL;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
/*
export function* getContacts() {
  // Select token from store
  const token = yield select(selectToken());
  const requestURL = AUTH_URL;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
*/
/**
 *
 */
export function* getTokenWatcher() {
  yield fork(takeLatest, SUBMIT_AUTH, getToken);
}
/**
 *
 */
export function* getSignUpWatcher() {
  yield fork(takeLatest, SUBMIT_SIGNUP, postSignUp);
}


/**
 * Root saga manages watcher lifecycle
 */
export function* tokenData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getTokenWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


/**
 * Root saga manages watcher lifecycle
 */
export function* signUpData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getSignUpWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  tokenData,
  signUpData,
];
