import expect from 'expect';

import {
  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,
  RECEIVE_CONTACT,
  RECEIVE_CONTACTS_ERROR,
  SUBMIT_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
} from '../constants';

import {
  requestContacts,
  receiveContacts,
  receiveContact,
  receiveContactsError,
  submitContact,
  createContactSuccess,
  createContactError,
} from '../actions';

describe('HomePage Actions', () => {
  describe('requestContacts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: REQUEST_CONTACTS,
      };

      expect(requestContacts()).toEqual(expectedResult);
    });
  });

  describe('receiveContacts', () => {
    it('should return the correct type and contacts', () => {
      const contacts = [1, 2];
      const expectedResult = {
        type: RECEIVE_CONTACTS,
        contacts,
      };

      expect(receiveContacts(contacts)).toEqual(expectedResult);
    });
  });

  describe('receiveContact', () => {
    it('should return the correct type and contacts', () => {
      const contact = { name: 'joe', email: 'foo@bar.com' };
      const expectedResult = {
        type: RECEIVE_CONTACT,
        contact,
      };

      expect(receiveContact(contact)).toEqual(expectedResult);
    });
  });


  describe('receiveContactsError', () => {
    it('should return the correct type and error msg', () => {
      const fetchContactsError = 'myerror';
      const expectedResult = {
        type: RECEIVE_CONTACTS_ERROR,
        fetchContactsError,
      };

      expect(receiveContactsError(fetchContactsError)).toEqual(expectedResult);
    });
  });

  describe('submitContact', () => {
    it('should return the correct type and contacts', () => {
      const contact = {
        name: 'joe',
        email: 'foo@bar.com',
        phone: '123',
        address: '123 main st',
        organization: 'facebook',
        birthday: '7/21/1990',
      };
      const expectedResult = {
        type: SUBMIT_CONTACT,
        contact,
      };

      expect(submitContact(contact)).toEqual(expectedResult);
    });
  });

  describe('createContactSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CREATE_CONTACT_SUCCESS,
      };

      expect(createContactSuccess()).toEqual(expectedResult);
    });
  });

  describe('createContactError', () => {
    it('should return the correct type and error msg', () => {
      const contactCreationError = 'myerror';
      const expectedResult = {
        type: CREATE_CONTACT_ERROR,
        contactCreationError,
      };

      expect(createContactError(contactCreationError)).toEqual(expectedResult);
    });
  });
});
