import expect from 'expect';

import {
  SUBMIT_AUTH,
  RECEIVE_TOKEN,
  RECEIVE_AUTH_ERROR,
} from '../constants';

import {
  submitAuth,
  receiveToken,
  receiveAuthError,
} from '../actions';

describe('App Actions', () => {
  describe('submitAuth', () => {
    it('should return the correct type and the email and password', () => {
      const email = 'fake@fake.com';
      const password = 'mypass';
      const expectedResult = {
        type: SUBMIT_AUTH,
        email,
        password,
      };

      expect(submitAuth(email, password)).toEqual(expectedResult);
    });
  });

  describe('receiveToken', () => {
    it('should return the correct type and a token', () => {
      const token = 'mytoken';
      const expectedResult = {
        type: RECEIVE_TOKEN,
        token,
      };

      expect(receiveToken(token)).toEqual(expectedResult);
    });
  });

  describe('receiveAuthError', () => {
    it('should return the correct type and an error msg ', () => {
      const authError = 'myerror';
      const expectedResult = {
        type: RECEIVE_AUTH_ERROR,
        authError,
      };

      expect(receiveAuthError(authError)).toEqual(expectedResult);
    });
  });
});
