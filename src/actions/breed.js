import actionsTypes from '../constants/actions/breed'

export function fetchBreed(breed) {
  return {
    type: actionsTypes.FETCH_BREED,
    payload: {breed}
  };
}

export function fetchBreedSuccess(dogsImgList) {
  return {
    type: actionsTypes.FETCH_BREED_SUCCESS,
    payload: {
      dogsImgList,
      isLoadingBreed: false,
      errorLoadBreed: false
    }
  };
}

export function loadBreedSuccess(isLoadingBreed) {
  return {
    type: actionsTypes.LOAD_BREED_SUCCESS,
    payload: {isLoadingBreed}
  };
}

export function errorLoadBreedSuccess(errorLoadBreed) {
  return {
    type: actionsTypes.ERROR_LOAD_BREED_SUCCESS,
    payload: {errorLoadBreed}
  };
}

export function fetchSubBreedSuccess(subBreeds) {
  return {
    type: actionsTypes.FETCH_SUB_BREED_SUCCESS,
    payload: {subBreeds}
  };
}

export function fetchSubBreed(subBreed, breed) {
  return {
    type: actionsTypes.FETCH_SUB_BREED,
    payload: {subBreed, breed}
  };
}

const actions = {
  fetchBreed,
  fetchBreedSuccess,
  loadBreedSuccess,
  errorLoadBreedSuccess,
  fetchSubBreedSuccess,
  fetchSubBreed
}

export default actions;