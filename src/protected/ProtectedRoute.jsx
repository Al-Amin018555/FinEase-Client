import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/UseAuth";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const { user } = useAuth();  
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>;
};

export default ProtectedRoute;