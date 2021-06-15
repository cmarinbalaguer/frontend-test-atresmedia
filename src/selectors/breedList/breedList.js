import { createSelector } from 'reselect';

const breedList = (state) => state?.breedList?.list || [];

export const breedListSelector = createSelector([breedList], (list) => list);