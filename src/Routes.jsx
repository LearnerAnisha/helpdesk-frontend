import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import App from "./App";
import { Notfound } from "./pages/Notfound";
import Layout from "./Components/Layout";
import AuthForm from "./Components/AuthForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Layout /> },
            { path: "auth", element: <AuthForm /> },
            {
                path: "dashboard",
                element: <ProtectedRoute />,
                children: [{ index: true, element: <Dashboard /> }],
            },],
    },

    { path: "*", element: <Notfound /> }, // Handle 404
]);

export default router;
