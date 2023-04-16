import { combineReducers, configureStore } from "@reduxjs/toolkit";

import mainSearchReducer from "../reducers/mainSearchReducer";
import userSearchReducer from "../reducers/userSearchReducer";
import isPlayReducer from "../reducers/isPlayReducer";
import playlistReducer from "../reducers/playlistReducer";
import favouritesIdReducer from "../reducers/favouritesIdReducer";

const rootReducer = combineReducers({
  userSearchResults: userSearchReducer,
  mainSearchResults: mainSearchReducer,
  playLists: playlistReducer,
  isPlay: isPlayReducer,
  favUuid: favouritesIdReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
