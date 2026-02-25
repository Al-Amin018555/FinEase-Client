import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-5xl text-red-400 flex justify-center">Hello World</div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
