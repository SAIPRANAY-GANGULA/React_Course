import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderComponent = () => {
  return (
    <div className="header">
      <a className="logo" href="/"></a>
      <FontAwesomeIcon icon="search" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
