import { createSelector } from 'reselect';

/**
 * Direct selector to the editContactsPage state domain
 */
const selectEditContactsPageDomain = () => (state) => state.get('editContactsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditContactsPage
 */

const selectEditContactsPage = () => createSelector(
  selectEditContactsPageDomain(),
  (substate) => substate.toJS()
);

const selectContact = () => createSelector(
  selectEditContactsPage(),
  (substate) => substate.contact,
);
export default selectEditContactsPage;
export {
  selectEditContactsPageDomain,
  selectContact,
};
