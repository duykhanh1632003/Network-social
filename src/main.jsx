import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostContextProvider } from "./context/PostContext.jsx";
import { ListPostContextProvider } from "./context/ListPostContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PostContextProvider>
          <ListPostContextProvider>
            <App />
          </ListPostContextProvider>
        </PostContextProvider>
        <ToastContainer />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
