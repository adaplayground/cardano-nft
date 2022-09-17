/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { connectRouter } from 'connected-react-router';
import { InjectedReducersType } from 'utils/types/injector-typings';
import history from 'utils/history';

const routerReducer = connectRouter(history);

export type RouterState = typeof routerReducer;

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  const rootReducer = combineReducers({
    router: routerReducer,
    ...injectedReducers,
  });
  return rootReducer;
}
