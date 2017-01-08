import expect from 'expect';
import editContactsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('editContactsPageReducer', () => {
  it('returns the initial state', () => {
    expect(editContactsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
