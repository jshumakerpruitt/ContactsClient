import expect from 'expect';
import homePageReducer from '../reducer';

import {
  receiveContacts,
  receiveContact,
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
    const fixture = fromJS([1, 2, 3]);
    const expectedResult = state.set('contacts', fixture);
    expect(homePageReducer(state, receiveContacts(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle receiveContact', () => {
    const fixture = { name: 'joe', email: 'foo@bar.com' };
    const expectedResult = state.set('contacts',
                                state.get('contacts').unshift(fixture));
    expect(homePageReducer(state, receiveContact(fixture)))
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
