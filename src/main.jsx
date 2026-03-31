import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import './index.css';
import FirebaseProvider from "./firebase/FirebaseProvider";
import router from "./routes/Routes";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>
);
