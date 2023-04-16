import { ADD_TO_PLAYLIST, CREATE_PLAYLIST, DELETE_PLAYLIST, REMOVE_FROM_PLAYLIST } from "../action";

const playlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return state.map((pl) => (pl.id === action.id ? { ...pl, trackList: [...pl.trackList, action.payload] } : pl));
    case REMOVE_FROM_PLAYLIST:
      return state.map((pl) =>
        pl.id === action.id ? { ...pl, trackList: pl.trackList.filter((track) => track.id !== action.payload.id) } : pl
      );
    case CREATE_PLAYLIST:
      return [...state, { title: action.payload, id: action.id, trackList: [] }];
    case DELETE_PLAYLIST:
      return [...state.filter((playlist) => playlist.title !== action.payload)];
    default:
      return state;
  }
};

export default playlistReducer;
