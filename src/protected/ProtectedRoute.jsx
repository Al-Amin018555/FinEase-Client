import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();  
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location.pathname }} replace></Navigate>;
};

export default ProtectedRoute;