import expect from 'expect';
import editContactsPageReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  receiveContact,
} from 'containers/HomePage/actions';

describe('editContactsPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      contact: null,
    });
  });

  it('returns the initial state', () => {
    expect(editContactsPageReducer(undefined, {})).toEqual(state);
  });

  it('handles receiveContact', () => {
    const fixture = { id: 1, name: 'alice' };
    const expectedState = state.set('contact', fromJS(fixture));
    expect(editContactsPageReducer(state, receiveContact(fixture)))
                               .toEqual(expectedState);
  });
});
