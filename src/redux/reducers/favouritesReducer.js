import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../action";

const initialState = {
  content: []
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload]
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((company) => company !== action.payload)
      };

    default:
      return state;
  }
};

export default favouritesReducer;
