import { combineReducers } from 'redux';
import search from './SearchForm/searchForm.reducer';
import shows from './Shows/showsList.reducer';

export default combineReducers({
  search,
  shows,
});
