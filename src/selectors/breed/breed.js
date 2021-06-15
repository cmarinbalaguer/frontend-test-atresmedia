import { createSelector } from 'reselect';

const breed = (state) => state?.breed?.dogsImgList || [];
const isLoadingBreed = (state) => state?.breed?.isLoadingBreed || false;
const errorLoadBreed = (state) => state?.breed?.errorLoadBreed || false;

export const breedSelector = createSelector([breed], (dogsImgList) => dogsImgList);
export const isLoadingBreedSelector = createSelector([isLoadingBreed], (isLoadingBreed) => isLoadingBreed);
export const errorLoadBreedSelector = createSelector([errorLoadBreed], (errorLoadBreed) => errorLoadBreed);