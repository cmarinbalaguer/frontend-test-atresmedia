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
    payload: dogsImgList,
  };
}

const actions = {
  fetchBreed,
  fetchBreedSucces
}

export default actions;