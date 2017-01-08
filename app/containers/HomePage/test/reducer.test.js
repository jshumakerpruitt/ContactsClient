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
      contacts: {},
      contactIds: [],
      errors: {
        fetchContactsError: null,
        contactCreationError: null,
      },
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {}))
      .toEqual(expectedResult);
  });

  it('should handle receiveContacts', () => {
    const contacts = [{ id: 1, name: 'bob' }, { id: 2, name: 'joe' }];
    const contactsState = fromJS({ 1: { id: 1, name: 'bob' }, 2: { id: 2, name: 'joe' } });
    const contactIds = fromJS([1, 2]);
    const expectedResult = state
      .set('contacts', contactsState)
      .set('contactIds', contactIds);
    expect(homePageReducer(state, receiveContacts(contacts)))
      .toEqual(expectedResult);
  });

  it('should handle receiveContact', () => {
    const fixture = { id: 1, name: 'joe', email: 'foo@bar.com' };
    const expectedResult = state.set('contactIds', fromJS([1]))
                                .set('contacts', fromJS({ 1: fixture }));


    expect(homePageReducer(state, receiveContact(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle receiveContactsError', () => {
    const fixture = 'myerror';
    const expectedResult = state.setIn(['errors', 'fetchContactsError'], fixture);
    expect(homePageReducer(state, receiveContactsError(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle createContactError', () => {
    const fixture = 'myerror';
    const expectedResult = state.setIn(['errors', 'contactCreationError'], fixture);
    expect(homePageReducer(state, createContactError(fixture)))
      .toEqual(expectedResult);
  });
});
