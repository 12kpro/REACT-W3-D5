import { useSelector } from "react-redux";
import GenresSection from "./GenresSection";

const PlayListMain = () => {
  const userSearchResults = useSelector((state) => state.userSearchResults);
  const playlists = useSelector((state) => state.playLists); //

  return (
    <>
      {userSearchResults.length > 0 && <GenresSection title="Search Results" trackStore={userSearchResults} />}
      {playlists.map(
        (playlist) =>
          playlist.trackList.length > 0 && (
            <GenresSection key={playlist.id} id={playlist.id} title={playlist.title} trackStore={playlist.trackList} />
          )
      )}
    </>
  );
};
export default PlayListMain;
