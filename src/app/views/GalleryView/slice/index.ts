import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { galleryViewSaga } from './saga';
import { GalleryViewState } from './types';
import { ImageMetaInfoType } from 'types';

export const initialState: GalleryViewState = {
  metaData: {},
  loading: false,
  currentPage: 1,
  searchText: '',
};

const slice = createSlice({
  name: 'galleryView',
  initialState,
  reducers: {
    clearMetaData(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = '';
      state.metaData = {};
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },

    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },

    addMetaData(
      state,
      action: PayloadAction<{ key: string; meta: ImageMetaInfoType }>,
    ) {
      state.loading = false;
      if (!(action.payload.key in state.metaData)) {
        if (action.payload.meta) {
          state.metaData[action.payload.key] = action.payload.meta;
        }
      }
    },
  },
});

export const { actions: galleryViewActions } = slice;

export const useGalleryViewSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: galleryViewSaga });
  return { actions: slice.actions };
};
