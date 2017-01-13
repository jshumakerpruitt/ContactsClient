// TODO: BOO no tests
import { capitalize, keys, uniq } from 'lodash';
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { reset } from 'redux-form/immutable';

import { takeLatest } from 'redux-saga';
import {
  take,
  call,
  put,
  select,
  fork,
  cancel,
} from 'redux-saga/effects';

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
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from './constants';

import {
  logOut,
  receiveToken,
  receiveErrors,
  receiveFlash,
} from 'containers/App/actions';

import {
  receiveContacts,
  receiveContact,
  receiveUpdatedContact,
  // createContactSuccess,
  deleteContactSuccess,
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
    // Knock gem returns an empty body on bad auth
    yield put(receiveErrors('Unable to Authenticate'));
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
    const errorHash = yield err.response.json();
    const messages = parseErrors(errorHash);

    for (let i = 0; i < messages.length; i += 1) {
      yield put(receiveErrors(messages[i]));
    }
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
    yield put(receiveFlash('Contact Created'));
    yield put(receiveContact(creationResponse));
    yield put(reset('contact'));
  } catch (err) {
    // read the errors from the API
    // and render useful messages to user
    const errorHash = yield err.response.json();
    delete errorHash.user;
    const messages = parseErrors(errorHash);

    for (let i = 0; i < messages.length; i += 1) {
      yield put(receiveErrors(messages[i]));
    }

    // trash token anytime you get 401
    // otherwise client thinks auth is valid
    // but server does not
    if (err.response.status === 401) {
      yield put(logOut());
    }
  }
}

// watcher: listens for SUBMIT_CONTACT action
export function* postContactWatcher() {
  yield fork(takeLatest, SUBMIT_CONTACT, postContact);
}

// Root contact creation saga
export function* createContactData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(postContactWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
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
    // trash token anytime you get 401
    // otherwise client thinks auth is valid
    // but server does not
    if (err.response.status === 401) {
      yield put(logOut());
    }
    yield put(receiveErrors(err));
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

/** DELETE contact sagas
 *
 * request/response handler
 */
export function* deleteContact(action) {
  const id = action.id;
  const requestURL = `${CONTACTS_URL}/${id}`;

  const token = yield select(selectToken());
  const options = getOptions({ token, method: 'DELETE' });

  try {
    yield call(request, requestURL, options);
    yield put(receiveFlash('Contact Deleted'));
    yield put(deleteContactSuccess(action.id));
  } catch (err) {
    // trash token anytime you get 401
    // otherwise client thinks auth is valid
    // but server does not
    if (err.response && err.response.status === 401) {
      yield put(logOut());
    }
    yield put(receiveErrors(err));
  }
}

// watcher: listens for DELETE_CONTACT action
export function* deleteContactWatcher() {
  yield fork(takeLatest, DELETE_CONTACT, deleteContact);
}

// Root contact creation saga
export function* deleteContactData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(deleteContactWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


/** UPDATE contact sagas
 *
 */
// contact update request/response handler
export function* patchContact(action) {
  const contact = action.contact.toJS();
  const requestURL = `${CONTACTS_URL}/${contact.id}`;

  const token = yield select(selectToken());
  const body = contact;
  const options = getOptions({ token, body, method: 'PUT' });

  try {
    yield call(request, requestURL, options);
    //
    yield put(receiveFlash('Update Successful'));
    yield put(receiveUpdatedContact(contact));
  } catch (err) {
    // trash token anytime you get 401
    // otherwise client thinks auth is valid
    // but server does not
    if (err.response &&
        err.response.status === 401) {
      yield put(logOut());
      yield put(push('/'));
    }
    const errorHash = yield err.response.json();
    delete errorHash.user;
    const messages = parseErrors(errorHash);

    for (let i = 0; i < messages.length; i += 1) {
      yield put(receiveErrors(messages[i]));
    }
  }
}

// watcher: listens for UPDATE_CONTACT action
export function* patchContactWatcher() {
  yield fork(takeLatest, UPDATE_CONTACT, patchContact);
}

// Root contact creation saga
export function* updateContactData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(patchContactWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap
export default [
  authData,
  signUpData,
  createContactData,
  fetchContactsData,
  deleteContactData,
  updateContactData,
];

const createMessage = (field, errors) => {
  const err = uniq(errors).join('; ');
  return `${capitalize(field)}: ${err}`;
};

const parseErrors = (errorHash) => {
  const errorKeys = keys(errorHash);
  return errorKeys.map((k) => createMessage(k, errorHash[k]));
};
