import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToPlayListAction } from "../redux/action";

const AddToPlayListAction = ({ track }) => {
  const dispatch = useDispatch();
  const favUuid = useSelector((state) => state.favUuid);
  const playLists = useSelector((state) => state.playLists);

  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [options, setOptions] = useState([]);
  const addToPlayList = (e) => {
    dispatch(addToPlayListAction(track, selectedPlaylist));
  };
  const handleChange = (e) => {
    setSelectedPlaylist(e.target.value);
  };
  useEffect(() => {
    const optionsList = playLists.filter((pl) => pl.id !== favUuid) || [];
    setOptions(optionsList);
    if (!selectedPlaylist && options.length > 0) {
      setSelectedPlaylist(options[0].id);
    }
  }, [playLists]);

  useEffect(() => {
    if (!selectedPlaylist && options.length > 0) {
      setSelectedPlaylist(options[0].id);
    }
  }, [options]);

  return (
    <>
      {options.length > 0 && (
        <div className="input-group mt-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            defaultValue={options[0].id}
          >
            {options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.title}
              </option>
            ))}
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={addToPlayList}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default AddToPlayListAction;
