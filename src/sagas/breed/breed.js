import { spawn, takeEvery, call, put} from 'redux-saga/effects'
import actionsTypes from '../../constants/actions/breed'
import { 
  fetchBreedSuccess,
  loadBreedSuccess,
  errorLoadBreedSuccess,
  fetchSubBreedSuccess
} from '../../actions/breed'
import apiBreed from '../../api/breed'
import apiSubBreed from '../../api/subBreed'

export default function* initSaga() {
  yield spawn(watchInit);
}

function* watchInit() {
  yield takeEvery(actionsTypes.FETCH_BREED, fetchBreed);
  yield takeEvery(actionsTypes.FETCH_SUB_BREED, fetchSubBreed);
}

export function* fetchBreed ({payload: {breed}}) {
  try {
    yield put(loadBreedSuccess(true));
    const response = yield call(apiBreed.getBreed, breed);
    yield put(fetchBreedSuccess(response.data.message));
    const responseSubBreed = yield call(apiSubBreed.getSubBreed, breed);
    yield put(fetchSubBreedSuccess(responseSubBreed.data.message));
  } catch (e) {
    yield put(loadBreedSuccess(false));
    yield put(errorLoadBreedSuccess(true));
  }
}

export function* fetchSubBreed ({payload: {subBreed, breed}}) {
  try {
    yield put(loadBreedSuccess(true));
    const response = yield call(apiSubBreed.getImagesSubBreed, subBreed, breed);
    yield put(fetchBreedSuccess(response.data.message));
  } catch (e) {
    yield put(loadBreedSuccess(false));
    yield put(errorLoadBreedSuccess(true));
  }
}