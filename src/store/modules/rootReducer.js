import { combineReducers } from 'redux';

import news from './news/reducers';
import searchButton from './searchButton/reducers';

export default combineReducers({
  news,
  searchButton
});
