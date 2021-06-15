import { spawn, takeEvery, call, put} from 'redux-saga/effects'
import actionsTypes from '../../constants/actions/breed'
import { fetchBreedSucces } from '../../actions/breed'
import apiBreed from '../../api/breed'

export default function* initSaga() {
  yield spawn(watchInit);
}

function* watchInit() {
  yield takeEvery(actionsTypes.FETCH_BREED, fetchBreed);
}

export function* fetchBreed ({breed}) {
  try {
    const response = yield call(apiBreed.getBreed, breed);
    yield put(fetchBreedSucces(response.data.message));
  } catch (e) {
    console.error(e);
  }
}