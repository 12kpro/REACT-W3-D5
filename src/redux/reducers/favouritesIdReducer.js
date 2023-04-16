import { ADD_FAVOURITES_ID } from "../action";

const favouritesIdReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_FAVOURITES_ID:
      return action.payload;
    default:
      return state;
  }
};

export default favouritesIdReducer;
