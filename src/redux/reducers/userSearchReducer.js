import { ADD_USER_SEARCH } from "../action";

const userSearchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER_SEARCH:
      return action.payload;
    /*{
        ...state,
        content: action.payload
      };*/
    default:
      return state;
  }
};

export default userSearchReducer;
