import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackHover from "./TrackHover";

const AlbumMain = () => {
  const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const params = useParams();

  const [albumInfo, setAlbumInfo] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setAlbumInfo(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(`${ALBUM_URL}${params.id}`);
  }, []);
  return (
    <>
      {albumInfo && (
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img src={albumInfo.cover_medium} className="card-img img-fluid" alt="Album" />
            <div className="mt-4 text-center">
              <p className="album-title">{albumInfo.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">{albumInfo.artist.name}</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {albumInfo.tracks.data.map((track) => (
                  <TrackHover key={track.id} track={track} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AlbumMain;
