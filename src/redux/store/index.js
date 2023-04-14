import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";
import mainSearchReducer from "../reducers/mainSearchReducer";
import userSearchReducer from "../reducers/userSearchReducer";
import isPlayReducer from "../reducers/isPlayReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  userSearchResults: userSearchReducer,
  mainSearchResults: mainSearchReducer,
  isPlay: isPlayReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
