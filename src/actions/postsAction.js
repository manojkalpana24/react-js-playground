import _ from "lodash";
import HttpRequest from "../core/HttpRequest";

/**
 * Synchronous action creator
 * Action creator must return plain JS objects
 */
export const selectPost = post => {
  // Return an action
  return {
    type: "POST_SELECTED",
    payload: post
  };
};

/**
 * Asynchronous action creator
 * fetchPosts returns function to make use of redux-thunk middleware to handle async request
 * it dispatches an action manually instead of returning an action object
 */
export const fetchPosts = () => async (dispatch, getState) => {
  // 'await' waits for the network request to complete
  const response = await HttpRequest.get("/posts");
  // Dispatch an action
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

/**
 * Asynchronous action creator
 * fetchUser returns function to make use of redux-thunk middleware to handle async request
 * it dispatches an action manually instead of returning an action object
 */
export const fetchUser = id => async (dispatch, getState) => {
  // 'await' waits for the network request to complete
  const response = await HttpRequest.get(`/users/${id}`);
  // Dispatch an action
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

/**
 * Action creator in action creator
 * fetchPostsAndUsers returns function to make use of redux-thunk middleware to handle async request
 * Make sure to dispatch action creator manually when you call an action creator inside an action creator
 */
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // 'await' waits for the network request to complete
  await dispatch(fetchPosts());
  // 'getState()' function has access to all the reducers key:value refer combineReducers() in reducers/index.js
  // finds unique userIds by lodash _.uniq,_.map functions
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  // dispatching fetchUser for each userId and not waiting for the network request to complete
  // forEach don't support await so if you want to wait for the network request to complete for all the users make use of await with Promise
  // Example : await Promise.all(userIds.map(id => dispatch(fetchUser(id))).then()
  userIds.forEach(id => dispatch(fetchUser(id)));
};
