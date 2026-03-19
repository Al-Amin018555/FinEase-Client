import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTransaction from '../components/AddTransaction/AddTransaction'
import MyTransaction from '../components/MyTransaction/MyTransaction';
import ProtectedRoute from '../protected/ProtectedRoute';
import UpdateTransaction from "../components/UpdateTransaction/UpdateTransaction";
import TransactionDetails from "../pages/TransactionDetails";
import MyProfile from "../pages/MyProfile";
import Reports from "../pages/Reports";
const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: '/', Component: Home },
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
            {
                path: 'transaction/update/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/transaction/${params.id}`),
                Component: () => (
                    <ProtectedRoute>
                        <UpdateTransaction></UpdateTransaction>
                    </ProtectedRoute>
                )
            },
            {
                path: 'transaction/:id',
                loader: ({params}) => fetch(`http://localhost:3000/transaction/${params.id}`),
                Component: () => (
                    <ProtectedRoute>
                        <TransactionDetails></TransactionDetails>
                    </ProtectedRoute>
                )
            },
            {
                path: 'my-profile',
                Component: () => (
                    <ProtectedRoute>
                        <MyProfile></MyProfile>
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;