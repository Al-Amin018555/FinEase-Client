import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTransaction from '../components/AddTransaction/AddTransaction'
import MyTransaction from '../components/MyTransaction/MyTransaction';
import Reports from '../components/Reports/Reports';

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
            },
            {
                path: "add-transaction",
                Component: AddTransaction,
            },
            {
                path: "my-transactions",
                Component: MyTransaction,
            },
            {
                path: "reports",
                Component: Reports,
            },
        ],
    },
]);

export default router;