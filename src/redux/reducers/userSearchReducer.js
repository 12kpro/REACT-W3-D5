import { ADD_USER_SEARCH } from "../action";

const initialState = {
  content: []
};

const userSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_SEARCH:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default userSearchReducer;
