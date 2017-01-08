/* eslint-disable new-cap */
import { Schema, arrayOf } from 'normalizr';

export const contact = new Schema('contacts');
export const arrayOfContacts = new arrayOf(contact);
