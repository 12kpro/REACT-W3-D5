import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToPlayListAction, isPlayAction, removeFromPlayListAction } from "../redux/action";
import AddToPlayListBtn from "./AddToPlayListBtn";

const Card = ({ track }) => {
  const dispatch = useDispatch();
  const playLists = useSelector((state) => state.playLists);
  const isplay = useSelector((state) => state.isPlay);
  const favUuid = useSelector((state) => state.favUuid);
  const favourites = playLists.find((pl) => pl.id === favUuid).trackList;
  const isInFavourites = favourites.find((favTrack) => favTrack.id === track.id);
  return (
    <div className="col text-center" id={track.id}>
      <div className="card-img position-relative">
        <img className="img-fluid" src={track.album.cover_medium} alt="1" onClick={() => {}} />
        <button
          type="button"
          className={`btn btn-favourites position-absolute top-0 start-0 ${isInFavourites ? "text-warning" : ""}`}
          onClick={() => {
            isInFavourites
              ? dispatch(removeFromPlayListAction(track, favUuid))
              : dispatch(addToPlayListAction(track, favUuid));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-star-fill lh-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        </button>
        <button
          type="button"
          className={`btn btn-play position-absolute top-50 start-50 translate-middle ${
            isplay && isplay.id === track.id ? "text-success visible" : "text-secondary"
          }`}
          onClick={() => {
            dispatch(isPlayAction(track));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        </button>
      </div>
      <AddToPlayListBtn track={track} />
      <p>
        <Link className="d-block" to={`/album/${track.album.id}`}>
          Album: {track.album.title.length < 16 ? `${track.album.title}` : `${track.album.title.substring(0, 16)}...`}
        </Link>
        <Link to={`/artist/${track.artist.id}`}>Artist: {track.artist.name}</Link>
      </p>
    </div>
  );
};
export default Card;
