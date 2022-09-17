import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.galleryView || initialState;

export const selectGalleryView = createSelector([selectSlice], state => state);

export const selectMetaData = createSelector(
  [selectGalleryView],
  state => state.metaData,
);

export const selectLoading = createSelector(
  [selectGalleryView],
  state => state.loading,
);

export const selectCurrentPage = createSelector(
  [selectGalleryView],
  state => state.currentPage,
);

export const selectSearchText = createSelector(
  [selectGalleryView],
  state => state.searchText,
);
