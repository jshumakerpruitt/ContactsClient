// TODO: BOO no tests

import { takeLatest } from 'redux-saga';
import {
  take,
  call,
  put,
  select,
  fork,
  cancel,
} from 'redux-saga/effects';
import { reset } from 'redux-form/immutable';

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
  REQUEST_CONTACTS,
} from './constants';

import {
  receiveToken,
  receiveAuthError,
  receiveSignUpError,
} from 'containers/App/actions';

import {
  receiveContacts,
  receiveContact,
  receiveContactsError,
  createContactSuccess,
  createContactError,
} from './actions';

import request, { getOptions } from 'utils/request';
import { selectToken } from 'containers/App/selectors';

// auth sagas
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
    // TODO: err was causing a crazy serialization error
    // posibly because rail api is returning a malformed
    // response.statusText. Just `put` a generic error for now
    // yield put(receiveAuthError(err));
    yield put(receiveAuthError('auth error'));
  }
}

// watcher: listens for SUBMIT_AUTH action
export function* postAuthWatcher() {
  yield fork(takeLatest, SUBMIT_AUTH, postAuth);
}

// root auth saga
export function* authData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postAuthWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


/**
 * signUp sagas
 *
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

// watcher: listens for SUBMIT_SIGNUP action
export function* postSignUpWatcher() {
  yield fork(takeLatest, SUBMIT_SIGNUP, postSignUp);
}

// Root signUp saga
export function* signUpData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postSignUpWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


/** contact creation sagas
 *
 */
// contact creation request/response handler
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
    yield put(receiveContact(action.contact));
    yield put(reset('contact'));
  } catch (err) {
    yield put(createContactError(err));
  }
}

// watcher: listens for SUBMIT_CONTACT action
export function* postContactWatcher() {
  yield fork(takeLatest, SUBMIT_CONTACT, postContact);
}


/*
 * fetchContacts sagas
 **/
// contacts request/response handler
export function* fetchContacts() {
  const requestURL = CONTACTS_URL;
  const token = yield select(selectToken());
  const options = getOptions({ token });

  try {
    const contactsResponse = yield call(request, requestURL, options);
    yield put(receiveContacts(contactsResponse));
  } catch (err) {
    yield put(receiveContactsError(err));
  }
}

// watcher: listens for REQUEST_CONTACTS action
export function* fetchContactsWatcher() {
  yield fork(takeLatest, REQUEST_CONTACTS, fetchContacts);
}

// Root contact creation saga
export function* fetchContactsData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(fetchContactsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Root contact creation saga
export function* createContactData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postContactWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  authData,
  signUpData,
  createContactData,
  fetchContactsData,
];
