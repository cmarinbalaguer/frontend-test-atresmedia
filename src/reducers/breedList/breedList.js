import { createReducer } from '../utilsReducer';
import actionsTypes from '../../constants/actions/breedList';

const initialState = {
  list: []
};

export default createReducer(initialState, {
  [actionsTypes.FETCH_BREED_LIST]: actions,
  [actionsTypes.FETCH_BREED_LIST_SUCCESS]: actions
});

function actions(state, action) {
  return Object.assign({}, state, {
    list: action.payload
  });
}