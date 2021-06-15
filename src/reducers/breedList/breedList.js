import { createReducer } from '../utilsReducer';
import actionsTypes from '../../constants/actions/breedList';

const initialState = {
  list: [],
  isLoading: false,
  errorLoading: false,
  selectedBreed: ''
};

export default createReducer(initialState, {
  [actionsTypes.FETCH_BREED_LIST]: actions,
  [actionsTypes.FETCH_BREED_LIST_SUCCESS]: actions,
  [actionsTypes.LOAD_BREED_LIST_SUCCESS]: actions,
  [actionsTypes.ERROR_LOADING_SUCCESS]: actions
});

function actions(state, action) {
  return Object.assign({}, state, {
    ...action.payload
  });
}