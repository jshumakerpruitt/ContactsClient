/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectToken = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('token')
);

const selectErrors = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('errors')
);

const selectAuthError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('authError')
);

const selectFlash = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('flash')
);

export {
  selectGlobal,
  selectErrors,
  selectFlash,
  selectLocationState,
  selectToken,
  selectAuthError,
};
