import "./scss/style.scss";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./components/Player";
import SideNav from "./components/Sidenav";
import AlbumMain from "./components/AlbumMain";
import ArtistMain from "./components/ArtistMain";
import MainLink from "./components/MainLink";
import Home from "./components/Home";
import PlayListMain from "./components/PlayListMain";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavouritesIdAction, addMainSearchAction, addPlayList } from "./redux/action";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favUuid = uuidv4();
    dispatch(addFavouritesIdAction(favUuid));
    dispatch(addPlayList("favourites", favUuid));
    dispatch(addMainSearchAction("pop"));
    dispatch(addMainSearchAction("rock"));
    dispatch(addMainSearchAction("hiphop"));
  }, []);
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideNav />
          </div>
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <MainLink />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/album/:id" element={<AlbumMain />} />
              <Route path="/artist/:id" element={<ArtistMain />} />
              <Route path="/playlist" element={<PlayListMain />} />
            </Routes>
          </div>
        </div>
      </div>
      <Player />
    </BrowserRouter>
  );
}

export default App;
