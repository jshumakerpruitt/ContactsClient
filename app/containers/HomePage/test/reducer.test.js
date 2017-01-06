import expect from 'expect';
import homePageReducer from '../reducer';

import {
  receiveContacts,
  receiveContactsError,
  createContactError,
} from '../actions';

import { fromJS } from 'immutable';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      contacts: [],
      fetchContactsError: null,
      contactCreationError: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {}))
      .toEqual(expectedResult);
  });

  it('should handle receiveContacts', () => {
    const fixture = [1, 2];
    const expectedResult = state.set('contacts', fixture);
    expect(homePageReducer(state, receiveContacts(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle receiveContactsError', () => {
    const fixture = 'myerror';
    const expectedResult = state.set('fetchContactsError', fixture);
    expect(homePageReducer(state, receiveContactsError(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle createContactError', () => {
    const fixture = 'myerror';
    const expectedResult = state.set('contactCreationError', fixture);
    expect(homePageReducer(state, createContactError(fixture)))
      .toEqual(expectedResult);
  });
});
