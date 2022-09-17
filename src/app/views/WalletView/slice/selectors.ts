import { createSelector } from '@reduxjs/toolkit';

import { MetaDataType, RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.walletView || initialState;

export const selectWalletView = createSelector([selectSlice], state => state);

export const selectArweaveId = createSelector(
  [selectWalletView],
  state => state.arweaveId,
);

export const selectMetaData = createSelector(
  [selectWalletView],
  state => state.metaData,
);

export const selectLoading = createSelector(
  [selectWalletView],
  state => state.loading,
);

export const selectBalance = createSelector(
  [selectWalletView],
  state => state.balance,
);

export const selectCollectibles = createSelector([selectWalletView], state => {
  const collectibles = [];
  for (const [key, value] of Object.entries(state.metaData)) {
    let authenticated = false;
    const metaType = JSON.parse(JSON.stringify(value)) as MetaDataType;
    if (key in state.mintAddresses) {
      const mintAddress = state.mintAddresses[key];
      const index = state.tokenList.findIndex(t => t === mintAddress);
      authenticated = index >= 0;
      metaType.mintAddress = mintAddress;
    }
    metaType.authenticated = authenticated;
    // @ts-ignore
    collectibles.push(metaType);
  }
  return collectibles;
});
