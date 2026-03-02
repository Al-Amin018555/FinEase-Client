import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      }
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
