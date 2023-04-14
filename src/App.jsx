//import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
//import MainSearch from "./components/MainSearch";
//import CompanySearchResults from "./components/CompanySearchResults";
//import FavouritesCompanies from "./components/FavouritesCompanies";
import "./scss/style.scss";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./components/Player";
import SideNav from "./components/Sidenav";
import AlbumMain from "./components/AlbumMain";
import ArtistMain from "./components/ArtistMain";
import MainLink from "./components/MainLink";
import Home from "./components/Home";

function App() {
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
              <Route path="/artist:id" element={<ArtistMain />} />
            </Routes>
          </div>
        </div>
      </div>
      <Player />
    </BrowserRouter>
  );
}

export default App;
