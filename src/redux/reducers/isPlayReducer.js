import { IS_PLAY } from "../action";

const isPlayReducer = (state = null, action) => {
  switch (action.type) {
    case IS_PLAY:
      return action.payload;
    default:
      return state;
  }
};

export default isPlayReducer;
