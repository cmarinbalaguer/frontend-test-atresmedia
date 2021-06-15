import { createReducer } from '../utilsReducer';
import actionsTypes from '../../constants/actions/breed';

const initialState = {
  dogsImgList: []
};

export default createReducer(initialState, {
  [actionsTypes.FETCH_BREED]: actions,
  [actionsTypes.FETCH_BREED_SUCCESS]: actions
});

function actions(state, action) {
  return Object.assign({}, state, {
    dogsImgList: action.payload
  });
}