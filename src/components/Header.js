import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link className="logo" to="/"></Link>
      <ul className="flex justify-center items-center">
        <Link to="/">
          <li className="mx-2 hover:text-orange-600">Home</li>
        </Link>
        <Link to="/about">
          <li className="mx-2 hover:text-orange-600">About</li>
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            className="mx-2 hover:text-orange-600"
            icon="shopping-cart"
          />
        </Link>
      </ul>
    </div>
  );
};

export default HeaderComponent;
