import { createSelector } from '@reduxjs/toolkit';

import { MetaDataType, RootState } from 'types';
import { initialState } from 'app/views/MarketView/slice/index';

const selectSlice = (state: RootState) => state.marketView || initialState;

export const selectMarketView = createSelector([selectSlice], state => state);

export const selectArweaveId = createSelector(
  [selectMarketView],
  state => state.arweaveId,
);

export const selectMetaData = createSelector(
  [selectMarketView],
  state => state.metaData,
);

export const selectLoading = createSelector(
  [selectMarketView],
  state => state.loading,
);

export const selectCandyMachines = createSelector([selectMetaData], meta => {
  const candyMachines = [];
  for (const [, value] of Object.entries(meta)) {
    // @ts-ignore
    candyMachines.push(value as MetaDataType);
  }

  return candyMachines;
});
