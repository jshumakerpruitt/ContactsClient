/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectContacts = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('contacts').toJS()
);

const selectContactIds = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('contactIds').toJS()
);

const selectContactsError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('contactsError')
);

export {
  selectHome,
  selectContacts,
  selectContactIds,
  selectContactsError,
};
