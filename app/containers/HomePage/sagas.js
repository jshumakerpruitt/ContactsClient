/**
 * gets the token and the contacts from the API
 * TODO: BOO no tests
 */

import { takeLatest } from 'redux-saga';
import {
  take,
  call,
  put,
  select,
  fork,
  cancel,
} from 'redux-saga/effects';

import { LOCATION_CHANGE } from 'react-router-redux';

import {
  SUBMIT_AUTH,
  SUBMIT_SIGNUP,
  AUTH_URL,
  USERS_URL,
  CONTACTS_URL,
} from 'containers/App/constants';

import {
  SUBMIT_CONTACT,
} from './constants';

import {
  receiveToken,
  receiveAuthError,
  receiveSignUpError,
} from 'containers/App/actions';

import {
//  receiveContacts,
//  receiveContactsError,
  createContactSuccess,
  createContactError,
} from './actions';

import request, { getOptions } from 'utils/request';
import { selectToken } from 'containers/App/selectors';

/**
 * token request/response handler
 */
export function* postAuth(action) {
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

/**
 * contact creation request/response handler
 */
export function* postContact(action) {
  const requestURL = CONTACTS_URL;

  const token = yield select(selectToken());
  const body = action.contact;
  const options = getOptions({ token, body, method: 'POST' });

  try {
    const creationResponse = yield call(request,
                                    requestURL,
                                    options);
    yield put(createContactSuccess(creationResponse));
  } catch (err) {
    yield put(createContactError(err));
  }
}


/**
 *
 */

export function* postAuthWatcher() {
  yield fork(takeLatest, SUBMIT_AUTH, postAuth);
}
/**
 *
 */

export function* postSignUpWatcher() {
  yield fork(takeLatest, SUBMIT_SIGNUP, postSignUp);
}

/**
 *
 */
export function* postContactWatcher() {
  yield fork(takeLatest, SUBMIT_CONTACT, postContact);
}


/**
 * Root saga manages watcher lifecycle
 */
export function* tokenData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postAuthWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


/**
 * Root saga manages watcher lifecycle
 */
export function* signUpData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postSignUpWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* createContactData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postContactWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  tokenData,
  signUpData,
  createContactData,
];
