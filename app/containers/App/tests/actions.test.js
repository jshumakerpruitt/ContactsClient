import expect from 'expect';

import {
  SUBMIT_AUTH,
  RECEIVE_TOKEN,
  RECEIVE_AUTH_ERROR,
  SUBMIT_SIGNUP,
  RECEIVE_SIGNUP_ERROR,
} from '../constants';

import {
  submitAuth,
  receiveToken,
  receiveAuthError,
  submitSignUp,
  receiveSignUpError,
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

  describe('receiveSignUpError', () => {
    it('should return the correct type and an error msg ', () => {
      const signUpError = 'myerror';
      const expectedResult = {
        type: RECEIVE_SIGNUP_ERROR,
        signUpError,
      };

      expect(receiveSignUpError(signUpError)).toEqual(expectedResult);
    });
  });
});
