import { createSelector } from 'reselect';

const breedList = (state) => state?.breedList?.list || [];
const isLoading = (state) => state?.breedList?.isLoading || false;
const errorLoading = (state) => state?.breedList?.errorLoading || false;
const selectedBreed = (state) => state?.breedList?.selectedBreed || '';

export const breedListSelector = createSelector([breedList], (list) => list);
export const isLoadingSelector = createSelector([isLoading], (loading) => loading);
export const errorLoadingSelector = createSelector([errorLoading], (errorLoading) => errorLoading);
export const selectedBreedSelector = createSelector([selectedBreed], (name) => name);