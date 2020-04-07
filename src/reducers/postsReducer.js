/**
 * Don't modify 'state' argument
 * Because redux combineReducers internally checks for previous 'state' and current 'state' in memory, so it doesn't update the react app if the current returned 'state' and the previous returned 'state' is same
 * Always return new array or object
 */
export const postsReducer = (state = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }
  return state;
};

export const selectedPostReducer = (state = [], action) => {
  if (action.type === "POST_SELECTED") {
    return action.payload;
  }
  return state;
};

export const usersReducer = (state = [], action) => {
  if (action.type === "FETCH_USER") {
    return [...state, action.payload];
  }

  return state;
};
