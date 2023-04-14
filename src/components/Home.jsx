import { useDispatch, useSelector } from "react-redux";
import GenresSection from "./GenresSection";
import { useEffect } from "react";
import { addMainSearchAction } from "../redux/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMainSearchAction("pop"));
    dispatch(addMainSearchAction("rock"));
    dispatch(addMainSearchAction("hiphop"));
  }, []);

  const userSearchResults = useSelector((state) => state.userSearchResults.content);
  const mainSearchResults = useSelector((state) => state.mainSearchResults);

  return (
    <>
      {userSearchResults.length > 0 && (
        <GenresSection title="Search Results" trackStore="userSearchResults" content="content" />
      )}
      {mainSearchResults &&
        Object.keys(mainSearchResults).map((genresTrack) => (
          <GenresSection key={genresTrack} title={genresTrack} trackStore="mainSearchResults" content={genresTrack} />
        ))}
    </>
  );
};
export default Home;
