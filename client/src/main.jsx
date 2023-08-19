import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import "./index.css";
import SearchProvider from "./context/searchContext";
import ItemsProvider from "./context/itemsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <ItemsProvider>
        <RouterProvider router={router} />
      </ItemsProvider>
    </SearchProvider>
  </React.StrictMode>
);
