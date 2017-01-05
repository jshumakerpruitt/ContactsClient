import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectContacts,
  selectContactsError,
} from '../selectors';

describe('selectContacts', () => {
  const contactsSelector = selectContacts();
  it('should select the contacts', () => {
    const contacts = [1, 2];
    const mockedState = fromJS({
      home: {
        contacts,
      },
    });

    expect(contactsSelector(mockedState))
      .toEqual(contacts);
  });
});

describe('select contactsError', () => {
  const contactsErrorSelector = selectContactsError();
  it('it should select the contactsError as a string', () => {
    const contactsError = 'myerror';
    const mockedState = fromJS({
      home: {
        contactsError,
      },
    });
    expect(contactsErrorSelector(mockedState)).toEqual(contactsError);
  });
});

