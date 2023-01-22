import React from "react";
import ReactDOM from "react-dom/client";
import NewHeaderComponent from "./components/Header"; /* Imported using Default Import Map */
import RestaurantList from "./components/RestaurantList"; /* Imported using default export */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorRoute from "./components/ErrorRoute";
import { RestaurantDetail } from "./components/RestaurantDetail";
import Profile from "./components/Profile";

library.add(faSearch, faShoppingCart);

const AppComponent = () => {
  return (
    <React.Fragment>
      <NewHeaderComponent />
      <Outlet />
    </React.Fragment>
  );
};

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: AppComponent(),
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "",
        element: <RestaurantList />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout} />);
