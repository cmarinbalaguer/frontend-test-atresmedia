import { createSelector } from 'reselect';

const breed = (state) => state?.breed?.dogsImgList || [];

export const breedSelector = createSelector([breed], (dogsImgList) => dogsImgList);