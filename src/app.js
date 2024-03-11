import React from "react";
import ReactDom from "react-dom/client";

import { Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom/dist";

import store from "./utils/store";

// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux/dist/react-redux";

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
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
