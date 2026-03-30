import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/UseAuth";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();  
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location.pathname }} replace></Navigate>;
};

export default ProtectedRoute;