import React from "react";
import ReactDOM from "react-dom/client";

// Function Component
const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    style={{ width: "60px", height: "70px" }} // inline-styling  in React
  ></img>
);

// Composing Components
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
