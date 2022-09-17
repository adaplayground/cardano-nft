import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { marketViewSaga } from 'app/views/MarketView/slice/saga';
import { MarketViewState } from 'app/views/MarketView/slice/types';

export const initialState: MarketViewState = {
  loading: false,
  summaryInfo: null,
  metaData: {},
};

const slice = createSlice({
  name: 'marketView',
  initialState,
  reducers: {
    getMetaData(state, action: PayloadAction<string>) {
      state.loading = true;
      state.errorMessage = '';
      state.arweaveId = action.payload;
    },

    clearMetaData(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = '';
      state.metaData = {};
    },

    addMetaData(state, action: PayloadAction<{ key: string; meta: any }>) {
      state.loading = false;
      state.arweaveId = '';
      if (!(action.payload.key in state.metaData)) {
        if (action.payload.meta) {
          state.metaData[action.payload.key] = action.payload.meta;
        }
      }
    },
  },
});

export const { actions: marketViewActions } = slice;

export const useMarketViewSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: marketViewSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useMarketViewSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
