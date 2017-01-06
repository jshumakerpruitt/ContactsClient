/**
 * Tests for HomePage sagas
 */

import expect from 'expect';
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  getToken,
  getTokenWatcher,
  tokenData,
/*  getContacts,
  getContactsWatcher,
  contactData,
*/
} from '../sagas';

import {
  SUBMIT_AUTH,
  API_ROOT,
} from 'containers/App/constants';

import {
  REQUEST_CONTACTS,
} from '../constants';

import {
  receiveToken,
  receiveTokenError,
  receiveContacts,
  receiveContactsError,
} from '../actions';

import request from 'utils/request';
import { selectToken } from 'containers/App/selectors';


describe('getToken Saga', () => {
  let getTokenGenerator;
  let token;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getTokenGenerator = getToken();
    token = selectToken();

    const selectDescriptor = getTokenGenerator.next().value;
    expect(selectDescriptor).toEqual(select(selectUsername()));

    const requestURL = `${API_ROOT}/user_token`
    const callDescriptor = getTokenGenerator.next(token).value;
    expect(callDescriptor).toEqual(call(request, requestURL));
  });

});
