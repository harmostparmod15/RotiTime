import React from "react";
import ReactDom from "react-dom/client";

import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom/dist";
import { Provider } from "react-redux/dist/react-redux";

import store from "./utils/store";

// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Instamart from "./components/Instamart";
import About from "./components/About";
import Contact from "./components/Contact";
import Payment from "./components/Payment";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
