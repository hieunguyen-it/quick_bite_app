import {fork} from '@redux-saga/core/effects';
import commonSaga from './commonSaga';

export default function* rootSaga() {
  yield fork(commonSaga);
}
