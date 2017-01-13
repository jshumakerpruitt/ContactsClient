import expect from 'expect';

import {
  SUBMIT_AUTH,
  RECEIVE_TOKEN,
  LOG_OUT,
  SUBMIT_SIGNUP,
} from '../constants';

import {
  logOut,
  submitAuth,
  receiveToken,
  submitSignUp,
} from '../actions';

describe('App Actions', () => {
  describe('submitAuth', () => {
    it('should return the correct type and the email and password', () => {
      const email = 'fake@fake.com';
      const password = 'mypass';
      const params = { email, password };
      const expectedResult = {
        type: SUBMIT_AUTH,
        email,
        password,
      };

      expect(submitAuth(params)).toEqual(expectedResult);
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

  describe('logOut', () => {
    it('it should have the correct type', () => {
      const expectedResult = {
        type: LOG_OUT,
      };

      expect(logOut()).toEqual(expectedResult);
    });
  });

  describe('submitSignUp', () => {
    it('should return correct type and email,username,password', () => {
      const email = 'fake@fake.com';
      const password = 'mypass';
      const username = 'myuname';
      const params = { email, password, username };

      const expectedResult = {
        type: SUBMIT_SIGNUP,
        email,
        username,
        password,
      };

      expect(submitSignUp(params)).toEqual(expectedResult);
    });
  });
});
