import actionsTypes from '../constants/actions/breedList'

export function fetchBreedList() {
  return {
    type: actionsTypes.FETCH_BREED_LIST
  };
}

export function fetchBreedListSuccess(list) {
  return {
    type: actionsTypes.FETCH_BREED_LIST_SUCCESS,
    list,
    isLoading: false,
    errorLoading: false
  };
}

export function loadBreedListSuccess(isLoading) {
  return {
    type: actionsTypes.LOAD_BREED_LIST_SUCCESS,
    isLoading
  };
}

export function errorLoadingSuccess(errorLoading) {
  return {
    type: actionsTypes.ERROR_LOADING_SUCCESS,
    errorLoading: errorLoading
  };
}

const actions = {
  fetchBreedList,
  fetchBreedListSuccess,
  loadBreedListSuccess,
  errorLoadingSuccess
}

export default actions;