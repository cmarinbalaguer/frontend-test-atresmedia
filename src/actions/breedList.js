import actionsTypes from '../constants/actions/breedList'

export function fetchBreedList() {
  return {
    type: actionsTypes.FETCH_BREED_LIST
  };
}

export function fetchBreedListSucces(list) {
  return {
    type: actionsTypes.FETCH_BREED_LIST_SUCCESS,
    payload: list,
  };
}

const actions = {
  fetchBreedList,
  fetchBreedListSucces
}

export default actions;