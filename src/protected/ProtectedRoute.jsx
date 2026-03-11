import useAuth from "../hooks/UseAuth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();  
    if (user) {
        return children;
    }
    return "";
};

export default ProtectedRoute;