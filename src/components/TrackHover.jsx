import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction, removeFromFavouritesAction } from "../redux/action";

const TrackHover = ({ track }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);
  const isInFavourites = favourites.includes(track.id);
  return (
    <div>
      <div className="py-3 d-flex justify-content-between align-items-center  trackHover text-white">
        <Link to="#" className="card-title trackHover px-3">
          {track.title}
        </Link>
        <button
          type="button"
          className={`btn ${isInFavourites ? "text-warning" : "text-white"}`}
          onClick={() => {
            isInFavourites ? dispatch(removeFromFavouritesAction(track.id)) : dispatch(addToFavouritesAction(track.id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill lh-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        </button>
        <small className="duration">{track.duration}</small>
      </div>
    </div>
  );
};
export default TrackHover;
