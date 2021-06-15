import { spawn, takeEvery, call, put} from 'redux-saga/effects';
import actionsTypes from '../../constants/actions/breedList'
import { fetchBreedListSuccess, errorLoadingSuccess, loadBreedListSuccess } from '../../actions/breedList';
import apiBreedList from '../../api/breedList';

export default function* initSaga() {
  yield spawn(watchInit);
}

function* watchInit() {
  yield takeEvery(actionsTypes.FETCH_BREED_LIST, fetchBreedList);
}

export function* fetchBreedList () {
  try {
    yield put(loadBreedListSuccess(true));
    const response = yield call(apiBreedList.getBreeds);
    yield put(fetchBreedListSuccess(Object.keys(response.data.message)));
  } catch (e) {
    yield put(errorLoadingSuccess(true));
  }
}
