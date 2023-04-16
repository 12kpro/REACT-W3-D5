import { ADD_MAIN_SEARCH } from "../action";

const mainSearchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MAIN_SEARCH:
      return [...state, { title: action.id, trackList: action.payload }];
    default:
      return state;
  }
};

export default mainSearchReducer;
