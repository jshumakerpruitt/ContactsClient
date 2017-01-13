import expect from 'expect';
import homePageReducer from '../reducer';

import {
  receiveContact,
  receiveContacts,
  deleteContactSuccess,
} from '../actions';

import { fromJS } from 'immutable';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      contacts: {},
      contactIds: [],
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

  it('should handle deleteContactSuccess', () => {
    const stateBefore = state.set('contactIds', fromJS([1]))
    .set('contacts', fromJS({ 1: { id: 1, name: 'alice' } }));
    const fixture = 1;
    const expectedResult = state;
    expect(homePageReducer(stateBefore, deleteContactSuccess(fixture)))
      .toEqual(expectedResult);
  });
});
