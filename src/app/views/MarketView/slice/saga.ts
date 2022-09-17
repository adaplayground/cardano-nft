import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { marketViewActions as actions } from 'app/views/MarketView/slice/index';

import arweaveApi from 'services/metaStorageApi';
import { selectArweaveId } from 'app/views/MarketView/slice/selectors';

function* fetchMetaData() {
  const arweaveId: string = yield select(selectArweaveId);
  const api = arweaveApi.create();
  let response;
  try {
    response = yield call(api.getMetaData, arweaveId);
    if (response.ok) {
      yield put(actions.addMetaData({ key: arweaveId, meta: response.data }));
    } else {
      yield put(actions.addMetaData({ key: arweaveId, meta: null }));
    }
  } catch {
    yield put(actions.addMetaData({ key: arweaveId, meta: null }));
  }
}

export function* marketViewSaga() {
  yield takeEvery(actions.getMetaData.type, fetchMetaData);
}
