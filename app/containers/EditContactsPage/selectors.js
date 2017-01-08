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

export default selectEditContactsPage;
export {
  selectEditContactsPageDomain,
};
