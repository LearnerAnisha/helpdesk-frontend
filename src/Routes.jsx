import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import App from "./App";
import Register from "./pages/Register";
import { Notfound } from "./pages/Notfound";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Layout /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            {
                path: "dashboard",
                element: <ProtectedRoute />,
                children: [{ index: true, element: <Dashboard /> }],
            },],
    },

    { path: "*", element: <Notfound /> }, // Handle 404
]);

export default router;
