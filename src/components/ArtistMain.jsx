import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistMain = () => {
  const ARTIST_URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
  const params = useParams();

  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setArtistInfo(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(`${ARTIST_URL}${params.id}`);
  }, []);
  return (
    <>
      {artistInfo && (
        <>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-10 mt-5">
              <h2 className="titleMain">{artistInfo.name}</h2>
              <div id="followers">{artistInfo.nb_fan} followers</div>
              <div className="d-flex justify-content-center" id="button-container">
                <button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                  PLAY
                </button>
                <button className="btn btn-outline-light mainButton d-inline" id="followButton">
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <div className="row" id="apiLoaded"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ArtistMain;
