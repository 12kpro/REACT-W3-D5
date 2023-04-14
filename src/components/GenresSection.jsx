import { useSelector } from "react-redux";
import Card from "./Card";

const GenresSection = ({ title, trackStore, content }) => {
  const trackList = useSelector((state) => state[trackStore][content]);
  return (
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>{title}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
            {trackList.map((track) => (
              <Card key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenresSection;
