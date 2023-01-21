import React from "react";
import ReactDOM from "react-dom/client";
import NewHeaderComponent from "./components/Header"; /* Imported using Default Import Map */
import BodyComponent from "./components/Body"; /* Imported using default export */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorRoute from "./components/ErrorRoute";

library.add(faSearch);

const AppComponent = () => {
  return (
    <React.Fragment>
      <NewHeaderComponent />
      <BodyComponent />
    </React.Fragment>
  );
};

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: AppComponent(),
    errorElement: <ErrorRoute />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout} />);
