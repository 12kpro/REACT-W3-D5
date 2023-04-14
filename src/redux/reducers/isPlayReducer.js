import { ADD_TO_ISPLAY, REMOVE_FROM_ISPLAY } from "../action";

const initialState = {
  content: []
};

const isPlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ISPLAY:
      return {
        ...state,
        content: [...state.content, action.payload]
      };

    case REMOVE_FROM_ISPLAY:
      return {
        ...state,
        content: state.content.filter((track, i) => track !== action.payload)
      };

    default:
      return state;
  }
};

export default isPlayReducer;
