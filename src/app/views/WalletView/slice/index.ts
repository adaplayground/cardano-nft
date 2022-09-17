import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { walletViewSaga } from './saga';
import { WalletViewState } from './types';

export const initialState: WalletViewState = {
  walletPublicKey: null,
  hasWallet: false,
  balance: 0,
  mintPublicKeys: [],
  mintAddresses: {},
  loading: false,
  metaData: {},
  tokenList: [],
};

const slice = createSlice({
  name: 'walletView',
  initialState,
  reducers: {
    setPublicKey(state, action: PayloadAction<string>) {
      state.walletPublicKey = action.payload;
      state.metaData = {};
      state.hasWallet = action.payload !== null;
    },
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
    setMintPublicKeys(state, action: PayloadAction<Array<string>>) {
      state.mintPublicKeys = action.payload;
    },

    setTokenList(state, action: PayloadAction<Array<string>>) {
      state.tokenList = action.payload;
    },

    getMetaData(state, action: PayloadAction<string>) {
      state.loading = true;
      state.errorMessage = '';
      state.arweaveId = action.payload;
    },

    addMintAddress(state, action: PayloadAction<{ key: string; mint: any }>) {
      if (!(action.payload.key in state.mintAddresses)) {
        if (action.payload.mint) {
          state.mintAddresses[action.payload.key] = action.payload.mint;
        }
      }
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

export const { actions: walletViewActions } = slice;

export const useWalletViewSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: walletViewSaga });
  return { actions: slice.actions };
};
