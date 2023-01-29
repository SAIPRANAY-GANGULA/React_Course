import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link className="logo" to="/"></Link>
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
  );
};

export default HeaderComponent;
