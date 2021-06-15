import { combineReducers } from 'redux';
import breedList from './breedList/breedList';
import breed from './breed/breed';

export default combineReducers({ breedList, breed});