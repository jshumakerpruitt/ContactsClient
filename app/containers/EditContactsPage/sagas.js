import { takeLatest } from 'redux-saga';
import {
  take,
  call,
  put,
  select,
  fork,
  cancel,
} from 'redux-saga/effects';

import { LOCATION_CHANGE, push } from 'react-router-redux';

import {
  CONTACTS_URL,
} from 'containers/App/constants';

import {
  UPDATE_CONTACT,
  REQUEST_CONTACT,
} from './constants';

import {
  updateContactError,
  updateContactSuccess,
  receiveContactForUpdate,
} from './actions';

import {
  logOut,
} from 'containers/App/actions';

import request, { getOptions } from 'utils/request';
import { selectToken } from 'containers/App/selectors';

/** contact update sagas
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
    const updateResponse = yield call(request,
                                        requestURL,
                                        options);
    yield put(updateContactSuccess(updateResponse));
  } catch (err) {
    // trash token anytime you get 401
    // otherwise client thinks auth is valid
    // but server does not
    if (err.response && err.response.status === 401) {
      yield put(logOut());
    }
    yield put(updateContactError(err));
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


// GET contact sagas
// contact request/response handler
export function* getContact(action) {
  const requestURL = `${CONTACTS_URL}/${action.id}`;
  const token = yield select(selectToken());
  const options = getOptions({ token });

  try {
    const contactResponse = yield call(request, requestURL, options);
    yield put(receiveContactForUpdate(contactResponse));
  } catch (err) {
    // trash token anytime you get 401
    // otherwise client thinks auth is valid
    // but server does not
    if (err.response.status === 401) {
      yield put(logOut());
      yield put(push('/'));
    }
    yield put(updateContactError(err));
  }
}

// watcher: listens for REQUEST_CONTACT action
export function* getContactWatcher() {
  yield fork(takeLatest, REQUEST_CONTACT, getContact);
}

// Root contact creation saga
export function* getContactData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getContactWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap
export default [
  updateContactData,
  getContactData,
];
