import { v4 as uuidv4 } from "uuid";
const BASE_URL_SEARCH = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const IS_PLAY = "IS_PLAY";
export const ADD_MAIN_SEARCH = "ADD_MAIN_SEARCH";
export const ADD_USER_SEARCH = "ADD_USER_SEARCH";
export const ADD_FAVOURITES_ID = "ADD_FAVOURITES_ID";

export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";

export const addFavouritesIdAction = (id) => ({ type: ADD_FAVOURITES_ID, payload: id });
export const isPlayAction = (track) => ({ type: IS_PLAY, payload: track });
export const addPlayList = (title, id = false) => ({ type: CREATE_PLAYLIST, id: id || uuidv4(), payload: title });
export const removePlayList = (title, id) => ({ type: DELETE_PLAYLIST, id: id, payload: title });

export const addToPlayListAction = (track, playListId) => ({ type: ADD_TO_PLAYLIST, id: playListId, payload: track });
export const removeFromPlayListAction = (track, playListId) => ({
  type: REMOVE_FROM_PLAYLIST,
  id: playListId,
  payload: track
});

export const addUserSearchAction = (query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL_SEARCH}${query}`);
      if (resp.ok) {
        let { data } = await resp.json(); //destrutturazione per prendere direttamente data dal risultato della fetch
        dispatch({ type: ADD_USER_SEARCH, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};

export const addMainSearchAction = (query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL_SEARCH}${query}`);
      if (resp.ok) {
        let { data } = await resp.json(); //destrutturazione per prendere direttamente data dal risultato della fetch
        dispatch({ type: ADD_MAIN_SEARCH, id: query, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};
