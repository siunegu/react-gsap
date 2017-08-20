import { combineReducers } from 'redux';
import links from './links';
import nav from './nav';

export default combineReducers({
  links,
  nav
});
