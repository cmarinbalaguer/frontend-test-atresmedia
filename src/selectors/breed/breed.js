import { createSelector } from 'reselect';

const breed = (state) => state?.breed?.dogsImgList || [];
const isLoadingBreed = (state) => state?.breed?.isLoadingBreed || false;
const errorLoadBreed = (state) => state?.breed?.errorLoadBreed || false;
const subBreeds = (state) => state?.breed?.subBreeds || [];

export const breedSelector = createSelector([breed], (dogsImgList) => dogsImgList);
export const isLoadingBreedSelector = createSelector([isLoadingBreed], (isLoadingBreed) => isLoadingBreed);
export const errorLoadBreedSelector = createSelector([errorLoadBreed], (errorLoadBreed) => errorLoadBreed);
export const subBreedsSelector = createSelector([subBreeds], (subBreeds) => subBreeds);