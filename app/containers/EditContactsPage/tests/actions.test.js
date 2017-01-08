import expect from 'expect';
import {
  updateContact,
  updateContactSuccess,
  updateContactError,
} from '../actions';
import {
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
} from '../constants';

describe('EditContactsPage actions', () => {
  describe('updateContact', () => {
    it('should return the correct type and contact', () => {
      const contact = {
        name: 'joe',
        email: 'foo@bar.com',
        phone: '123',
        address: '123 main st',
        organization: 'facebook',
        birthday: '7/21/1990',
      };
      const expectedResult = {
        type: UPDATE_CONTACT,
        contact,
      };

      expect(updateContact(contact)).toEqual(expectedResult);
    });
  });

  describe('updateContactError', () => {
    it('should return the correct type and error msg', () => {
      const error = 'myerror';
      const expectedResult = {
        type: UPDATE_CONTACT_ERROR,
        error,
      };

      expect(updateContactError(error))
        .toEqual(expectedResult);
    });
  });

  describe('updateContactSuccess', () => {
    it('should return the correct type and the contact', () => {
      const contact =
        { id: 1, name: 'alice', email: 'alice@mit.edu' };
      const expectedResult = {
        type: UPDATE_CONTACT_SUCCESS,
        contact,
      };

      expect(updateContactSuccess(contact))
        .toEqual(expectedResult);
    });
  });
});
