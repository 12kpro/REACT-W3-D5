const BASE_URL_SEARCH = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
//const BASE_URL_COMPANY_JOBS = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const IS_PLAY = "IS_PLAY";
export const ADD_MAIN_SEARCH = "ADD_MAIN_SEARCH";
export const ADD_USER_SEARCH = "ADD_USER_SEARCH";

export const addToFavouritesAction = (track) => ({ type: ADD_TO_FAVOURITES, payload: track });
export const removeFromFavouritesAction = (track) => ({ type: REMOVE_FROM_FAVOURITES, payload: track });
export const isPlayAction = (track) => ({ type: IS_PLAY, payload: track });

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

/*
export const addCompanyJobsAction = (query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL_COMPANY_JOBS}${query}`);
      if (resp.ok) {
        let { data } = await resp.json();
        dispatch({ type: ADD_COMPANY_JOBS, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};
*/
