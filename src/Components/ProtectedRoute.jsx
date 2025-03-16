import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("authToken"); // Example check
    return isAuthenticated ? (<><Navbar /> <Outlet /></>) : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
