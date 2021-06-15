import { createReducer } from '../utilsReducer';
import actionsTypes from '../../constants/actions/breed';

const initialState = {
  dogsImgList: [],
  isLoadingBreed: false,
  errorLoadBreed: false
};

export default createReducer(initialState, {
  [actionsTypes.FETCH_BREED]: actions,
  [actionsTypes.FETCH_BREED_SUCCESS]: actions,
  [actionsTypes.ERROR_LOAD_BREED_SUCCESS]: actions,
  [actionsTypes.LOAD_BREED_SUCCESS]: actions,
});

function actions(state, action) {
  return Object.assign({}, state, {
    ...state,
    dogsImgList: action.dogsImgList,
    isLoadingBreed: action.isLoadingBreed,
    errorLoadBreed: action.errorLoadBreed
  });
}