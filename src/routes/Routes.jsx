import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTransaction from '../components/AddTransaction/AddTransaction'
import MyTransaction from '../components/MyTransaction/MyTransaction';
import Reports from '../components/Reports/Reports';
import ProtectedRoute from '../protected/ProtectedRoute';
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
                Component: () => (
                    <ProtectedRoute>
                        <AddTransaction></AddTransaction>
                    </ProtectedRoute>
                ),
            },
            {
                path: "my-transactions",
                Component: () => (
                    <ProtectedRoute>
                        <MyTransaction></MyTransaction>
                    </ProtectedRoute>
                ),
            },
            {
                path: "reports",
                Component: () => (
                    <ProtectedRoute>
                        <Reports></Reports>
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;