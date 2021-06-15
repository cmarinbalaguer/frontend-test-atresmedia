import actionsTypes from '../constants/actions/breed'

export function fetchBreed(breed) {
  return {
    type: actionsTypes.FETCH_BREED,
    breed
  };
}

export function fetchBreedSucces(dogsImgList) {
  return {
    type: actionsTypes.FETCH_BREED_SUCCESS,
    dogsImgList,
    isLoadingBreed: false,
    errorLoadBreed: false
  };
}

export function loadBreedSucces(isLoadingBreed) {
  return {
    type: actionsTypes.LOAD_BREED_SUCCESS,
    isLoadingBreed
  };
}

export function errorLoadBreedSucces(errorLoadBreed) {
  return {
    type: actionsTypes.ERROR_LOAD_BREED_SUCCESS,
    errorLoadBreed
  };
}

const actions = {
  fetchBreed,
  fetchBreedSucces,
  loadBreedSucces,
  errorLoadBreedSucces
}

export default actions;