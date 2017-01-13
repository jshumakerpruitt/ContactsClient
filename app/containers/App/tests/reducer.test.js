import expect from 'expect';
import appReducer from '../reducer';

import {
  logOut,
  receiveToken,
} from '../actions';

import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      token: null,
      errors: null,
      flash: null,
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

  it('should handle logOut', () => {
    const loggedInState = state.set('token', 'mytoken');
    const expectedResult = fromJS({});
    expect(appReducer(loggedInState, logOut()))
      .toEqual(expectedResult);
  });
});
