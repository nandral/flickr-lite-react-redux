import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const appReducer = combineReducers({
  search: searchReducer
});

export default appReducer;
