import expect from 'expect';
import editContactsPageReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  receiveContactForUpdate,
} from '../actions';

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

  it('handles receiveContactForUpdate', () => {
    const fixture = { id: 1, name: 'alice' };
    const expectedState = state.set('contact', fromJS(fixture));
    expect(editContactsPageReducer(state, receiveContactForUpdate(fixture)))
                               .toEqual(expectedState);
  });
});
