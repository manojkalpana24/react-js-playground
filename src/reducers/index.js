/**
 * Rules :
 * Must return any value except 'undefined'
 * Returns state or data to be used inside of your app using only previous state and the current action
 * Reducer should not either make a network request or DOM operations
 * Must not mutate its input 'state' argument
 */

import { combineReducers } from "redux";

// Reducers
import {
  postsReducer,
  selectedPostReducer,
  usersReducer,
} from "./postsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  users: usersReducer,
  form: formReducer,
});
