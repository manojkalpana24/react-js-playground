import _ from "lodash";
/**
 * Don't modify 'state' argument
 * Because redux combineReducers internally checks for previous 'state' and current 'state' in memory, so it doesn't update the react app if the current returned 'state' and the previous returned 'state' is same
 * Always return new array or object
 */
export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      // _.mapKeys converts array to object based key value
      // [{"id": 1},{"id": 2}] to {1: {"id": 1},2: {"id": 2}}
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case "FETCH_POST":
      // Dynamically adding key, value pair
      // Key interpolation ES2015 syntax
      return { ...state, [action.payload.id]: action.payload };

    case "CREATE_POST":
      return { ...state, [action.payload.id]: action.payload };

    case "EDIT_POST":
      return { ...state, [action.payload.id]: action.payload };

    case "DELETE_POST":
      return _.omit(state, action.payload);

    default:
      return state;
  }
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
