import actionsTypes from '../constants/actions/breedList'

export function fetchBreedList() {
  return {
    type: actionsTypes.FETCH_BREED_LIST
  };
}

export function fetchBreedListSuccess(list) {
  return {
    type: actionsTypes.FETCH_BREED_LIST_SUCCESS,
    payload: {
      list,
      isLoading: false,
      errorLoading: false
    }
  };
}

export function loadBreedListSuccess(isLoading) {
  return {
    type: actionsTypes.LOAD_BREED_LIST_SUCCESS,
    payload: {isLoading}
  };
}

export function errorLoadingSuccess(errorLoading) {
  return {
    type: actionsTypes.ERROR_LOADING_SUCCESS,
    payload: {errorLoading: errorLoading}
  };
}

const actions = {
  fetchBreedList,
  fetchBreedListSuccess,
  loadBreedListSuccess,
  errorLoadingSuccess
}

export default actions;