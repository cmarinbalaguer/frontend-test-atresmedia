import { spawn, all } from 'redux-saga/effects';
import breedList from './breedList/breedList';
import breed from './breed/breed';

const sagas = [breedList, breed];

export default function* rootSaga() {
  yield all(sagas.map((saga) => spawn(saga)));
}
