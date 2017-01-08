import expect from 'expect';
import appReducer from '../reducer';

import {
  logOut,
  receiveToken,
  receiveAuthError,
  receiveSignUpError,
} from '../actions';

import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      token: null,
      authError: null,
      signUpError: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {}))
      .toEqual(expectedResult);
  });

  it('should handle receiveToken', () => {
    const fixture = 'mytoken';
    const expectedResult = state.set('token', fixture);
    expect(appReducer(state, receiveToken(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle receiveAuthError', () => {
    const fixture = 'myerror';
    const expectedResult = state.set('authError', fixture);
    expect(appReducer(state, receiveAuthError(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle receiveSignUpError', () => {
    const fixture = 'myerror';
    const expectedResult = state.set('signUpError', fixture);
    expect(appReducer(state, receiveSignUpError(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle logOut', () => {
    const loggedInState = state.set('token', 'mytoken');
    const expectedResult = state.set('token', null);
    expect(appReducer(loggedInState, logOut()))
      .toEqual(expectedResult);
  });
});
