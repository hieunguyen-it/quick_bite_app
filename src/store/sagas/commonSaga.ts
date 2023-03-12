import {takeEvery, call, put} from 'redux-saga/effects';
import {getCatsFetch, getCatsSuccess} from '@store/reducers/commonSlice';

function* workGetCatsFetch(): any {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCatsShortened));
}

function* CommonSaga() {
  yield takeEvery(getCatsFetch, workGetCatsFetch);
}

export default CommonSaga;
