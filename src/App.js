import React from "react";
import ReactDOM from "react-dom/client";
import NewHeaderComponent from "./components/Header"; /* Imported using Default Import Map */
import BodyComponent from "./components/Body"; /* Imported using default export */

const AppComponent = () => {
  return (
    <React.Fragment>
      <NewHeaderComponent />
      <BodyComponent />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppComponent());
