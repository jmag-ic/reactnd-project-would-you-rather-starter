import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import fetchedData from './fetchedData';

export default combineReducers({
  users,
  questions,
  authedUser,
  fetchedData,
  loadingBar: loadingBarReducer
});