import { Link } from "react-router-dom";
import logo from "../assets/logo/Spotify_Logo.png";
import { useDispatch } from "react-redux";
import { addUserSearchAction } from "../redux/action";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const location = useLocation();

  console.log(location);
  const search = (e) => {
    dispatch(addUserSearchAction(query));
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
      <div className="nav-container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Spotify_Logo" width="131" height="40" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <Link className="nav-item nav-link" to="/">
                  <i className="fas fa-home fa-lg"></i>&nbsp; Home
                </Link>
              </li>
              <li>
                <Link className="nav-item nav-link" to="/">
                  <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                </Link>
              </li>
              {!location.pathname.includes("album") && !location.pathname.includes("artist") && (
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                    />
                    <div className="input-group-append" style={{ marginBottom: "4%" }}>
                      <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={search}>
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <Link to="/">Cookie Policy</Link> |<Link to="/"> Privacy</Link>
      </div>
    </nav>
  );
};

export default SideNav;
