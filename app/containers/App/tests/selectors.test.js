import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectGlobal,
  selectLocationState,
  selectToken,
  selectAuthError,
} from '../selectors';

describe('selectGlobal', () => {
  const globalSelector = selectGlobal();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectLocationState', () => {
  const locationStateSelector = selectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});

describe('selectToken', () => {
  const tokenSelector = selectToken();
  it('should select the token as a string', () => {
    const token = 'mytoken';
    const mockedState = fromJS({
      global: {
        token,
      },
    });

    expect(tokenSelector(mockedState))
      .toEqual(token);
  });
});

describe('select authError', () => {
  const authErrorSelector = selectAuthError();
  it('it should select the authError as a string', () => {
    const authError = 'myerror';
    const mockedState = fromJS({
      global: {
        authError,
      },
    });
    expect(authErrorSelector(mockedState)).toEqual(authError);
  });
});

