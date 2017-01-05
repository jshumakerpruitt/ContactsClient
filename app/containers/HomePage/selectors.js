/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectContacts = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('contacts')
);

export {
  selectHome,
  selectContacts,
};
