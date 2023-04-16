import { useSelector } from "react-redux";
import GenresSection from "./GenresSection";

const Home = () => {
  const userSearchResults = useSelector((state) => state.userSearchResults);
  const mainSearchResults = useSelector((state) => state.mainSearchResults);

  return (
    <>
      {userSearchResults.length > 0 && <GenresSection title="Search Results" trackStore={userSearchResults} />}
      {mainSearchResults.map((genresTrack) => (
        <GenresSection
          key={`genres-${genresTrack.title}`}
          title={genresTrack.title}
          trackStore={genresTrack.trackList}
        />
      ))}
    </>
  );
};
export default Home;
