import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/errorPage";
import DetailItem, { loader as itemLoader } from "../pages/detailItem";
import ItemsList from "../pages/itemsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ItemsList />,
      },
      {
        path: "/items/:id",
        errorElement: <ErrorPage />,
        loader: itemLoader,
        element: <DetailItem />,
      },
    ],
  },
]);

export default router;
