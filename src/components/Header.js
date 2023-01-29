import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import SearchInputContext from "../utils/SearchInputContext";

const HeaderComponent = () => {
  const { searchText, setSearchText } = useContext(SearchInputContext);

  return (
    <div className="header-container-shadow | fixed w-screen z-10 bg-white">
      <div className="header">
        <Link className="logo" to="/"></Link>
        <div className="search">
          <FontAwesomeIcon icon="search" />
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
        </div>
        <ul className="flex justify-center items-center">
          <Link to="/">
            <li className="link">Home</li>
          </Link>
          <Link to="/about">
            <li className="link">About</li>
          </Link>
          <Link to="/instamart">
            <li className="link">Instamart</li>
          </Link>
          <Link to="/">
            <FontAwesomeIcon className="link" icon="shopping-cart" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
